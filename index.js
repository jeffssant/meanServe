const express = require('express');

//Criar o servidor/aplicação Express
const app = express();

//GET
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Ok'
    })
});

app.listen(4000, () => {
    console.log(`Servidor rodando na porta ${4000}`);
});