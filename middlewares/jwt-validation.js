const { response } = require("express");
const  jwt  = require("jsonwebtoken")


const jwtVald = (req, res = response, next) => {

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token não encontrado'
        })
    }

    try {
        
        const {uid, name} = jwt.verify(token, process.env.SECRET_JTW_SEED);
        req.uid = uid;
        req.name = name;

    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Token não é valido'
        })

    }

    next();
}

module.exports = {
    jwtVald
}