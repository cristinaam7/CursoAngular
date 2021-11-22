
//Para que se pueda usar en otros ficheros
//usamos export
export interface Producto{
    desc: string,
    precio: number
}

const telefono = {
    desc: "Nokia",
    precio: 100
}

const tablet = {
    desc: "Sansung",
    precio: 200
}

function calculaISV(productos: Producto[]): number{
    let total = 0;

    productos.forEach((producto) => {
        total += producto.precio;
    })

    return total * 0.15;
}

const productos = [telefono, tablet]
const isv = calculaISV(productos);
console.log(isv);

//Desestructuracion de funciones

export function calculaISV2(productos: Producto[]): number[]{
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const productos2 = [telefono, tablet]
const [total, isv2] = calculaISV2(productos2);
console.log(total);
console.log(isv2);