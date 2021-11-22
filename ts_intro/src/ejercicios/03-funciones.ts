

/*
    ===== Código de TypeScript =====
*/

//Definicion en JS
//Puede sumar cadenas, numeros, objetos
//Acepta todo y podría dar error
function sumar(a, b){
    return a + b;
}

const resultado = sumar("A","B");
console.log(resultado);
const resultado2 = sumar(1,2);
console.log(resultado2);

//Definicion en TS
function sumar2(a:number, b:number): number{
    return a + b;
}

//Esto ya va a lanzar un error
//Aunque realmente el codigo se ejecuta y devuelve AB
//Esto es porque siempre se intenta traducir TS a JS
//Y en JS sería correcto
//const resultado3 = sumar2("A","B");
//console.log(resultado3);
//const resultado4 = sumar2(1,2);
//console.log(resultado4);

//Lo mismo con funciones de fecha
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}


//ARGUMENTOS OPCIONALES

//Definicion JS
function multiplicar(a, b, c){
    return a*c;
}
//Esto se ejecuta y daria un NaN
//El parametro que no se pasa se considera default
//console.log(multiplicar(1,2));

//Definicion TS
//Segundo argumento opcional
//Tercer argumento fijo
//Estos deben ir siempre al final
function multiplicar2(a:number, b?:number, c:number=10): number{
    return a*c;
}
console.log(multiplicar2(5));


//OBJETOS

interface Enfermo{
    nombre: string,
    pv: number,
    mostrarPV(): void;
}

function curar( enfermo: Enfermo, puntos: number): void{
    enfermo.pv += puntos;
    enfermo.mostrarPV();
}

const nuevoEnfermo: Enfermo = {
    nombre: 'Cris',
    pv: 50,
    mostrarPV(): void{
        console.log('Puntos vida: '+this.pv);
    }
}
curar(nuevoEnfermo, 20);
