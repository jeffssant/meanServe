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


const loginUser = async(req, res = response) => {
    
    const {email, password} = req.body;

    try {

        // Criar Objeto User a partir do DB
        const dbUser = await User.findOne({email});
        
        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'Email invalido'
            })
        }

        // Confirmar senha
        const ValidPassword = bcrypt.compareSync(password, dbUser.password);

        if(!ValidPassword){
            
            return res.status(400).json({
                ok: false,
                msg: 'Senha invalida'
            })
           
        }

        //JWT
        const token = await JWTGen(dbUser.id, dbUser.name);

        // Resposta
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
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

const renewTk = async(req, res = response) => {

    const {uid, name} = req;

    //JWT
    const token = await JWTGen(uid, name);
    
    return res.json({
        ok: true,
        msg: "Renew /",
        uid,
        name,
        token
    })

}

module.exports = {
    newuser,
    loginUser,
    renewTk
}