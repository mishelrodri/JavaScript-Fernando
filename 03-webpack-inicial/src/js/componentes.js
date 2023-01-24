import '../css/componentes.css';
import imagen from '../assets/img/blackpink.jpg'

// No olvidemos que debemos exportar los modulos
export const saludar = (nombre) => {
    console.log('Creando una etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);

    const img = document.createElement('img');
    img.src = imagen;
    document.body.append(img)
}