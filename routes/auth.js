const {Router} = require('express');
const { check } = require('express-validator');
const { newuser, loginUser, renewTk } = require('../controllers/auth.controller');

const router = Router();

//Criar um novo usuario
router.post('/new', newuser)

//Login usuario
router.post('/', [
    check('email', 'Email é obrigatório').isEmail(),
    check('password', 'Senha é obrigatória').isLength({min: 6})
] , loginUser)

//Validar e revalidar Token
router.get('/renew', renewTk)

module.exports = router;