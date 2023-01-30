const jokeURL = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

//Cloudinary
const cloudPreset = "irb7zm4d";
const cloudUrl = "https://api.cloudinary.com/v1_1/dkghlvypj/upload";

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

// archivoSubir: tipo file
const subirImagen = async (archivoSubir) => {
  // un formulario del lado de JS
  const formData = new FormData();
  formData.append("upload_preset", cloudPreset);
  formData.append("file", archivoSubir);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};

export { obtenerChiste, obtenerUsuarios, subirImagen };
