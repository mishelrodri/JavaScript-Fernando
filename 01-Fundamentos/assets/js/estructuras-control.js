
const hoy = new Date()
let dia = hoy.getDay()

if (dia === 0) {
    console.log('Domingo')
} else {
    console.log('No es Domingo')
}

const dias = {
    0: () => 'Domingo' + ' 0',
    1: () => 'Lunes' + ' 1',
    2: () => 'Martes' + ' 2',
    3: () => 'Miercoles' + ' 3',
    4: () => 'Jueves' + ' 4',
    5: () => 'Viernes' + ' 5',
    6: () => 'Sabado' + ' 6'

}

const dias2 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'

]

/* Si lo de la izquierda  es NULL Y UNDEFINED entonces va a tomar el valor de la izquierda sino NUNCA LLEGARA A ESO */
// console.log(dias[dia] || 'Día no definido')
console.log(dias[dia]())
console.log(dias2[dia])