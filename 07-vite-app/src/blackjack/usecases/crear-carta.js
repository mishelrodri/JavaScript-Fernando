
export const crearCarta = (carta, turno, divCartasjugador) => {
    const imagen = document.createElement("img");
    imagen.src = `assets/cartas/${carta}.png`;
    imagen.classList.add("carta");
    divCartasjugador[turno].append(imagen);
};
