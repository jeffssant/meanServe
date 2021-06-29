const {Router} = require('express');
const { check } = require('express-validator');
const { newuser, loginUser, renewTk } = require('../controllers/auth.controller');
const { validationFields } = require('../middlewares/data-validation');

const router = Router();

//Criar um novo usuario
router.post('/new',[
    check('name', 'Nome é obrigatorio').not().isEmpty(),
    check('email', 'Email é obrigatório').isEmail(),
    check('password', 'Senha é obrigatória').isLength({min: 6}),
    validationFields
] , newuser)

//Login usuario
router.post('/', [
    check('email', 'Email é obrigatório').isEmail(),
    check('password', 'Senha é obrigatória').isLength({min: 6}),
    validationFields
] , loginUser)

//Validar e revalidar Token
router.get('/renew', renewTk)

module.exports = router;