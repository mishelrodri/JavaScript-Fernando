//PETICIIONES fetch() -> propio de JS

const jokeURL = "https://api.chucknorris.io/jokes/random";

/* fetch(jokeURL).then((resp) => {
  console.log(resp);

  //que estraiga el body en formato de JSON que tambien es una promesa por eso ponemos un then
  resp.json().then(({ id, value }) => {
    // console.log(data.id);
    // console.log(data.value);
    console.log(id);
    console.log(value);
  });
});
 */

// UNA FORMA MÁS CORTA
fetch(jokeURL)
  .then((resp) => resp.json())
  .then(({ id, value }) => {
    console.log(id, value);
  });
