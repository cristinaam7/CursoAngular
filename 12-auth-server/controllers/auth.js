const { reponse, request } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        //Confirmar que existe el email
        const usuario = await Usuario.findOne({email});
        if( !usuario ){
            return res.status(401).json({
                ok: false,
                msg: 'Credenciales no válidas (1)'
            });
        }

        //Confirmar password
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(401).json({
                ok: false,
                msg: 'Credenciales no válidas (2)'
            });
        }

        //Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        //Respuesta

        //Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
	    email: usuario.email,
            token
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. Contacte con el administrador'
        });
    }
};

const crearUsuario = async (req = request, res = response) => {

    const { email, name, password } = req.body;

    try {

        //Verificar que el email no exista
        const usuario = await Usuario.findOne({email});
        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese email'
            });
        }

        //Crear usuario en el modelo
        const usuarioDB = new Usuario(req.body);

        //Encriptar password
        const salt = bcrypt.genSaltSync(10);
        usuarioDB.password = bcrypt.hashSync(password, salt);

        //Generar el JWT (token)
        const token = await generarJWT(usuarioDB.id, usuarioDB.name)

        //Crear usuario en la BD
        await usuarioDB.save();

        //Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            uid: usuarioDB.id,
            name,
	    email,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. Contacte con el administrador'
        });
    }
};

const revalidarToken = async (req, res) => {

    const {uid, name} = req;

    const token = await generarJWT(uid, name);

    //Obtener el email
    const usuario = await Usuario.findById(uid);
    if( !usuario ){
        return res.status(500).json({
            ok: false,
            msg: 'Error interno. Contacte con el administrador'
        });
    }

    return res.status(200).json({
        ok: true,
        uid: uid,
        name: name,
	email: usuario.email,
        token: token
    });
};

module.exports = {
    login,
    crearUsuario,
    revalidarToken
}
