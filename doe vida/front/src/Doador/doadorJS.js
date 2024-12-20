require('dotenv').config(); // Carrega variáveis de ambiente

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { body, validationResult } = require('express-validator');

const app = express();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os doadores
app.get('/UsuariosDoador', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM UsuariosDoador');
        res.json(result.rows); // Retorna todos os doadores
    } catch (err) {
        console.error('Erro ao buscar doadores:', err.message);
        res.status(500).json({ error: 'Erro ao buscar Doador' });
    }
});

// Rota para buscar um doador por ID
app.get('/UsuariosDoador/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM UsuariosDoador WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Doador não encontrado' });
        }
        res.json(result.rows[0]); // Retorna o doador encontrado
    } catch (err) {
        console.error('Erro ao buscar doador:', err.message);
        res.status(500).json({ error: 'Erro ao buscar Doador' });
    }
});

// Rota para adicionar um doador com validação
app.post('/CadastroDoador', [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO UsuariosDoador (nome, endereco, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, endereco, email, telefone]
        );
        res.status(201).json({
            message: 'Doador cadastrado com sucesso',
            doador: result.rows[0],  // Retorna o doador inserido
        });
    } catch (err) {
        console.error('Erro ao adicionar doador:', err.message);
        res.status(500).json({ error: 'Erro ao adicionar Doador' });
    }
});

// Rota para atualizar um doador
app.put('/UsuariosDoador/:id', [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
], async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await pool.query(
            'UPDATE UsuariosDoador SET nome = $1, endereco = $2, email = $3, telefone = $4 WHERE id = $5 RETURNING *',
            [nome, endereco, email, telefone, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Doador não encontrado' });
        }
        res.json(result.rows[0]); // Retorna o doador atualizado
    } catch (err) {
        console.error('Erro ao atualizar doador:', err.message);
        res.status(500).json({ error: 'Erro ao atualizar Doador' });
    }
});

// Rota para deletar um doador
app.delete('/UsuariosDoador/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM UsuariosDoador WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Doador não encontrado' });
        }
        res.json({ message: 'Doador deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar Deletar' });
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
