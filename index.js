const express = require('express');
const cors = require('cors');
const path = require('path');

const { dbConnection } = require('./db/config');
require('dotenv').config();

//Criar o servidor/aplicação Express
const app = express();

// DB Connection
dbConnection();

//Diretorio Publico
app.use(express.static('public'))

//CORS
app.use(cors());

//Lendo e encaminhando Body
app.use(express.json());

//Rotas
app.use('/api/auth', require('./routes/auth'));

//Rotas para o front
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});