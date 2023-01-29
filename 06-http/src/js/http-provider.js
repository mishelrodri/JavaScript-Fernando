const jokeURL = "https://api.chucknorris.io/jokes/random";

// sync que devuelve una promesa
const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeURL);
    if (!resp.ok) throw "Nose pudo realizar";

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

export { obtenerChiste };
