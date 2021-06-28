const {Router} = require('express');

const router = Router();

//Criar um novo usuario
router.post('/new', (req, res) => {

    return res.json({
        ok: true,
        msg: "Criar Usuario /new"
    })

})

//Login usuario
router.post('/', (req, res) => {

    return res.json({
        ok: true,
        msg: "Login de usuario / "
    })

})

//Validar e revalidar Token
router.get('/renew', (req, res) => {

    return res.json({
        ok: true,
        msg: "Renew /"
    })

})

module.exports = router;