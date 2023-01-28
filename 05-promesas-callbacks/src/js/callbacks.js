
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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if (heroe) {
        callback(null, heroe);

    } else {
        //UN ERROR
        callback(`no existe un hero con el id ${id}`);

    }
    // callback(heroe);
}