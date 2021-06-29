const express = require('express');
const cors = require('cors');

//Criar o servidor/aplicação Express
const app = express();

//CORS
app.use(cors());

//Lendo e encaminhando Body
app.use(express.json());

//Rotas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Servidor rodando na porta ${4000}`);
});