const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { JWTGen }= require('../helpers/jwt');


const newuser = async(req, res = response) => { 
    
    const {email, name, password} = req.body;
    
    try {
        // Verificar se usuario existe pelo email unico
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'Email já cadastrado em nossa base de dados'
            })
        }

        // Criar objeto usuario  a partir do model
        dbUser = new User(req.body);
        

        //Hash da senha
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);
    

        //JWT
        const token = await JWTGen(dbUser.id, name);


        // Salvar usuario na base
        await dbUser.save()        

        // Resposta
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        })


    } catch (error) {

        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Entre em contato com o administrado do sistema"
        })
        
    }

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