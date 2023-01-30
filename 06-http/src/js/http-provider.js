const jokeURL = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";
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

const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();

  return usuarios;
};

export { obtenerChiste, obtenerUsuarios };
