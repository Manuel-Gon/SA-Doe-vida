const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'Postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'DoeVida_Hospital', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os clientes
app.get('/Usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar o Hospital' });
    }
});

// Rota para buscar um cliente por ID
app.get('/Usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Usuarios WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'hospital não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar Hospital' });
    }
});

// Rota para adicionar um cliente
app.post('/CadastroHospital', async (req, res) => {
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO CadastroHospital (nome, endereco, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, endereco, email, telefone]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

// Rota para atualizar um cliente
app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clientes SET nome = $1, endereco = $2, email = $3, telefone = $4 WHERE id = $5 RETURNING *',
            [nome, endereco, email, telefone, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
});

// Rota para deletar um cliente
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});