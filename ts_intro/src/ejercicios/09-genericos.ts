


//La T me permite indicarle que puede ser de cualquier tipo
//Tipo generico
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy("Hola");
let soyNumber = queTipoSoy(100);

//Aqui le indico el tipo especifico
let soyExplicito = queTipoSoy<string>("EY");