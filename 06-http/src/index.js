// import { init } from "./js/chistes-page";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";

import * as CRUD from "./js/crud-provaider";
// init();

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
  name: "Fernando",
  job: "Carpintero",
}).then(console.log);

CRUD.actualizarUsuario(1, {
  name: "Mishel",
  job: "developrer",
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);
