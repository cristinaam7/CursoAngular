//Importar librerias necesarias
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, revalidarToken } = require('../controllers/auth.js');
const { validarCampos } = require('../middlewares/validar-campos.js');
const { validarJWT } = require('../middlewares/validar-jwt.js');

//Creamos el router
const router = Router();

//Definir endpoints
//El segundo parametro son funciones que se ejecutan
//antes que el controlador y que podrian cancelarlo
//Se ejecutan de manera secuencial
router.post('/', 
            [
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password es obligatorio').isLength({'min': 6}),
                validarCampos
            ], 
            login);

router.post( '/new',
            [
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
                validarCampos
            ], crearUsuario );

router.get('/renew', validarJWT, revalidarToken);

//Exportamos el router para que se pueda utilizar en otros modulos
module.exports = router;