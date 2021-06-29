const {Router} = require('express');
const { newuser, loginUser, renewTk } = require('../controllers/auth.controller');

const router = Router();

//Criar um novo usuario
router.post('/new', newuser)

//Login usuario
router.post('/', loginUser)

//Validar e revalidar Token
router.get('/renew', renewTk)

module.exports = router;