interface Detalles{
    autor: string,
    anio: number
}

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 46,
    cancion: 'Mess',
    detalles: {
        autor: 'Cris',
        anio: 2021
    }
}

console.log("Volumen: ", reproductor.volumen);
console.log("Segundo actual: ", reproductor.segundo);
console.log("Canción: ", reproductor.cancion);
console.log("Autor: ", reproductor.detalles.autor);
console.log("Año: ", reproductor.detalles.anio);

//Desestructuracion de objectos
const {cancion: sing, detalles} = reproductor;
const {autor} = detalles;

console.log("Canción: ", sing);
console.log("Autor: ", autor);


//Desestructuracion de Arrays

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('P1: ', dbz[0]);
console.log('P2: ', dbz[1]);
console.log('P3: ', dbz[2]);

//El orden es importante
//Los que no quiera mostrar los dejo vacios
const [p1, , p3] = dbz;
console.log('P1: ', p1);
console.log('P3: ', p3);