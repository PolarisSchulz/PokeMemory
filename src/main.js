// importar lo que esta en app (esto ya estaba en el documento)

import App from "./components/App.js";
document.getElementById("root").appendChild(App());

// importar pokemon.js
import pokemon from "./data/pokemon/pokemon.js";

// importar la data
import getDataPokemon from "./data/pokemon/pokemon.js";
console.log(getDataPokemon);

// dos arrays de pokemon de los datos para hacer el match
const arrayPokemonOriginal = pokemon.items;
// console.log(dataPokemon.items);
const arrayPokemonCopy = pokemon.items;
// console.log(dataPokemon.items);

// unir ambos arrays con concat para tener ambos pares de cartas para el match
let dataPokemonOriginalAndCopy = arrayPokemonOriginal.concat(arrayPokemonCopy);
// console.log(dataPokemonOriginalAndCopy);

// Acá se revuelve, sort permite ordenar los elementos de un arreglo de acuerdo al resultado de una funcion que en este caso será su parametro

//Math.random los va a desaordenar y ordenarlos de manera diferente en cada partida

const randomPokemon = dataPokemonOriginalAndCopy.sort(() => {
  return Math.random() - 0.5;
});

// let randomnize = "";
// for (let index = 0; index < 18; index++) {
//   const print = document.getElementById("pokeMatchCards");
//   randomnize += `<div class="container">
//       <div class="memoryMatch">
//       <div class="frontCardPokemon">
//       <img src="../img/pokebolatarjeta-08.png">
//       </div>
//       <section class="backCardPokemon">
//       <img src="${randomPokemon[index].image}" alt="" <h3>${randomPokemon[index].id}</h3></section>
//       </div>
//     </div>`;

//   print.innerHTML = randomnize;
// }

// let randomnize = "";
// for (let index = 0; index < 18; index++) {
//   const print = document.getElementById("pokeMatchCards");
//   randomnize += `
//       <div class="dashboardCards">
//       <div class="frontCardPokemon">
//       <img src="../img/pokebolatarjeta-08.png">
//       </div>
//       <section class="backCardPokemon">
//       <img src="${randomPokemon[index].image}" alt="" <h3>${randomPokemon[index].id}</h3></section>
//       </div>
//     </div>`;

//   print.innerHTML = randomnize;
// }

// pokeMatchCards-seccion den la linea 25 del HTML donde se colocan las cartas de pokemon
// dashboardCards-Cartas de pokemon donde hacemos que tengan movimiento
// cardsPokemon-Cartas de pokemon, donde hacemos que esten quietas
// backCardPokemon-Donde estan los pokemones
// frontCardPokemon-Donde esta la imagen de la pokebola
let randomnize = "";
for (let index = 0; index < 18; index++) {
  const print = document.getElementById("pokeMatchCards");
  randomnize += `
      <div class="dashboardCards">
      <div class="cardsPokemon">
      <div class="cardCommon backCardPokemon">
      <img src="${randomPokemon[index].image}" alt="" <h3>${randomPokemon[index].id}</h3>
      </div>
      <div class="cardCommon frontCardPokemon">
      <img src="../img/pokebolatarjeta-08.png">
      </div>
      </div>
    </div>`;

  print.innerHTML = randomnize;
}

let cards = document.getElementsByClassName("cardsPokemon");
for (const card of cards) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}
