const mongoose = require('mongoose');

//Lo ponemos asincrono para que si no levanta la bd
//no levante el resto de la aplicacion
const dbConnection = async() => {

    try {

        //El await hace que se espere hasta que el 
        //connect termine
        await mongoose.connect(
            process.env.DB
        );

        console.log('BD Online');
        
    } catch (error) {
        console.log(error);
        throw new Error("Error conexión BD");
    }

}

module.exports = {
    dbConnection
}