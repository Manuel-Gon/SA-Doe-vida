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


  

// caso ocorra um erro de servidor
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro no servidor' });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


