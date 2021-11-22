
//Los decoradores sirven para añadir y/o expandir funcionalidades
//Hay que llamarlos antes de instanciar la clase
function classDecorator<T extends {new (...args: any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'new property';
        hello = "averride";
    };
}


@classDecorator
class MiSuperClase{

    public miPropiedad: string = 'ABC';

    imprimir(){
        console.log('Hola mundo')
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);