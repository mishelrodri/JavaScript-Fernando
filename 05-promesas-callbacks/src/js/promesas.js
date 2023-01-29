
//BASE DE DATOS
// id :{propiedades}

const heroes = {
    capi: {
        nombre: 'capitan america',
        poder: 'tiene un poder'
    },
    spidey: {
        nombre: 'peter',
        poder: 'mi patron'
    }
}

// LO MISMO PERO CON ASYC

//no hay que mandarle algun callback
export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];


    //return de una promesa

    //valores opcionales
    if (heroe) {
        return heroe;
    } else {
        // throw Error(`no existe un hero con el id ${id}`)
        throw `no existe un hero con el id ${id}`;
    }
}


//no hay que mandarle algun callback

export const buscarHeroe = (id) => {
    const heroe = heroes[id];


    //return de una promesa

    //valores opcionales
    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`no existe un hero con el id ${id}`)
        }
    });
}



const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa lenta'), 2000);
})
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa promesaMedia'), 1500);
})
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa promesaRapida'), 1000);
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}