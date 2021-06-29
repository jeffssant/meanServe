const {response} = require('express');

const newuser = (req, res = response) => {
    const {email, name, password} = req.body;
    console.log(email, name, password);
    return res.json({
        ok: true,
        msg: "Criar Usuario /new"
    })

}


const loginUser = (req, res = response) => {
    const {email, password} = req.body;
    console.log(email, password);
    return res.json({
        ok: true,
        msg: "Login de usuario / "
    })

}

const renewTk = (req, res = response) => {
    
    return res.json({
        ok: true,
        msg: "Renew /"
    })

}

module.exports = {
    newuser,
    loginUser,
    renewTk
}