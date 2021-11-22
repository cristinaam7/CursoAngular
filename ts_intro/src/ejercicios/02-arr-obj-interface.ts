

/*
    ===== Código de TypeScript =====
*/

//Solo puede ser string
let habilidades_1 = ['hab1', 'hab2', 'hab3'];

//Puede ser tipo string o numero
let habilidades_2 = ['hab1', 'hab2', 'hab3', 100];

//En TS hay que indicar siempre el tipo
//Como buena practica
let habilidades_3: string[] = ['hab1', 'hab2', 'hab3'];
let habilidades_4: (String | number)[] = ['hab1', 'hab2', 'hab3', 100];

//Para describir como debe ser un personaje
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string; //opcional
}

//Aqui ya puedo crear una variable que tenga el tipo correcto
const persona: Personaje = {
    nombre: 'Cris',
    hp: 100,
    habilidades: ['hab1', 'hab2', 'hab3']
}

persona.puebloNatal = "Córdoba";

console.table(persona);