
console.warn('Asignaciones con &&')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// 1 tiene valor y el otro tiene valor , se deja el ultimo VALOR
const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;

console.log('---------------------')

console.warn('Asignaciones con ||')

const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo';

console.log({ a1, a2, a3, a4, a5 })