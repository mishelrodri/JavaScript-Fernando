import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;
const emoji = [
  "😂",
  "🤣",
  "🤠",
  "😆",
  "😋",
  "😜",
  "😝",
  "😛",
  "🤪",
  "🤭",
  "😹",
];

const crearChsteHtml = () => {
  const html = `
    <h1>🤣 Chistes</h1>
    <hr />
    <button type="button" class="btn btn-success">⏳ Otro Chiste</button>

    <ol class="list-group mt-2">
    </ol>
    `;

  const divChistes = document.createElement("div");
  divChistes.innerHTML = html;

  body.append(divChistes);
};

const eventos = () => {
  olList = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  btnOtro.addEventListener("click", async () => {
    btnOtro.disabled = true;

    dibujarChiste(await obtenerChiste());
    btnOtro.disabled = false;
  });
};

export const init = () => {
  crearChsteHtml();
  // DEBE LLMARSE HASTA QUE SE CREEN LOS NODOS
  eventos();
};

// Chiste{id, balue}
const dibujarChiste = (chiste) => {
  const olItem = document.createElement("li");
  olItem.innerHTML = `${obtenerEmoji()} ${chiste.value}`;
  olItem.classList.add("list-group-item");
  olItem.classList.add("py-2-1");
  olList.append(olItem);
};

const obtenerEmoji = () => {
  const rand = Math.floor(Math.random() * emoji.length);
  return emoji[rand];
};
