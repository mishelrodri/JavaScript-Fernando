// endPoint -> ???

const urlCRUD = "https://reqres.in/api/users";

const getUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);
  // desestructuramos la data
  const { data } = await resp.json();

  return data;
};

const crearUsuario = async (usuario) => {
  const resp = await fetch(urlCRUD, {
    method: "POST",
    body: JSON.stringify(usuario),
    //data adicional de que el backend pudria pedir
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

const actualizarUsuario = async (id, usuario) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "PUT",
    body: JSON.stringify(usuario),
    //data adicional de que el backend pudria pedir
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

// 204 registro borrado

const borrarUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "DELETE",
  });
  return resp.ok ? "borrado" : "no se pudo borrar";
};

export { getUsuario, crearUsuario, actualizarUsuario, borrarUsuario };
