const express = require('express');
const cors = require('cors');
require('dotenv').config();



//Criar o servidor/aplicação Express
const app = express();

//CORS
app.use(cors());

//Lendo e encaminhando Body
app.use(express.json());

//Rotas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});