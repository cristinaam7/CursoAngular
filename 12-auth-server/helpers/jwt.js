const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {

    const payload = { uid, name };

    return new Promise ( (resolver, reject) => {
        jwt.sign(
            payload, 
            process.env.SECRET_JWT_SEED, 
            { expiresIn: '24h'}, 
            (err, token) => {
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    resolver(token);
                }
            }
        );
    });
   
}

module.exports = {
    generarJWT
}