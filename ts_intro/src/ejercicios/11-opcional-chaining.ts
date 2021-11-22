interface Pasajero{
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Maria',
    hijos: ['Aram', 'Acher']
}

function imprimeHijos(pasajero: Pasajero): void{
    
    //Para que no de error cuando haya pasajeros sin hijos
    let numHijos = pasajero.hijos?.length || 0;
    console.log(numHijos);
}

imprimeHijos(pasajero1);