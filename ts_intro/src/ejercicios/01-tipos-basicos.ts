
//La constante no cambia de valor asi que no hay que tiparla
const prueba = "Prueba";

//Tipo string
let nombre: string = 'Cris';
//Si le intento asignar un numero da error
//nombre =1;

//A una misma variable le puedo asignar mas de un tipo
let variable: string | number = 77;
variable = 'Cris';

//Boolean
let activo: boolean = false;

console.log(nombre + ' ' + variable +' ' + activo);