const express = require('express');

//Criar o servidor/aplicação Express
const app = express();

//Rotas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Servidor rodando na porta ${4000}`);
});