// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

function App() {
  const el = document.createElement("div");
  el.className = "App";
  // el.textContent = "Vamo a llamar a los pokemones! Esto es en app.js";

  return el;
}
export default App;

// ESTO YA NO SE OCUPA PERO LO DEJO POR SI ACASO

// export const builder = (prueba) => {
//   return `<img id="image" src = "${prueba.items.image}"> `;
// };
