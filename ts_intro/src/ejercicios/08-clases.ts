class PersonaNormal {
    
    //En lugar de definir las propiedades al principio
    //Se pueden crear en el conductor
    constructor(
        public nombre: string,
        public direccion: string){
    }
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string){
            super(nombreReal, 'NY');
    }
}

const superwoman = new Heroe('SUPERWOMAN', 1000, 'Diana');
console.log(superwoman);


