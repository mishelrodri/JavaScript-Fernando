import '../css/componentes.css';
import '../styles.css';


export const saludo = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, ¿How are you?`;
    document.body.append(h1);
}