// importar lo que esta en app (esto ya estaba en el documento)
import App from "./components/App.js";
document.getElementById("root").appendChild(App());

// importar la data pokemon.js
import pokemon from "./data/pokemon/pokemon.js";

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

// Para imprimir la data en el DOM
// pokeMatchCards-seccion den la linea 25 del HTML donde se colocan las cartas de pokemon
// dashboardCards-Cartas de pokemon donde vamos a hacer que tengan movimiento
// cardsPokemon-Cartas de pokemon, donde hacemos que se pegue el lado del frente con el lado de atras y le diga al codigo que es un solo objeto
// backCardPokemon-Donde estan los pokemones
// frontCardPokemon-Donde esta la imagen de la pokebola

let pokeId = "";
let randomnize = "";
for (let index = 0; index < 18; index++) {
  const print = document.getElementById("pokeMatchCards");
  randomnize += `
    <div class="dashboardCards">
      <div class="cardsPokemon">
        <div id="${index}" class="cardCommon backCardPokemon ${randomPokemon[index].id}" >
          <img src="${randomPokemon[index].image}" <h3>${randomPokemon[index].id}</h3>
        </div>
        <div class="cardCommon frontCardPokemon ${randomPokemon[index].id}">
          <img src="../img/pokebolatarjeta-08.png">
        </div>
      </div>
    </div>`;

  print.innerHTML = randomnize;
}

//variable selectCards, es igual a manipular el elemento con la clase "cardsPokemon", linea 41 de main.js
// el ciclo for itera la nueva constante creada que llamaremos card dentro de selectCards, donde al ejecutar el evento clic (seleccionar la carta), la funcion anonima insertada, hará que la constante card ejecute la propiedad elemento class list con el metodo toggle que es un token booleano, se enlace con is-flipped a la linea 73 de style.css y genere el giro de 180 grados

// flippedCards solo da informacion de cuantas tarjetas se estan usando
let flippedCards = null;
let pokeId1 = null;
let pokeId2 = null;
let flips = 0;
let firstPokemon = null;
let secondPokemon = null;
let score = 0;

// variable para apuntar en el HTML el lugar que se esta ocupando los flips y score linea 36 y 38
let showFlips = document.getElementById("flips");
let showScore = document.getElementById("score");

let selectCards = document.getElementsByClassName("cardsPokemon");
for (const card of selectCards) {
  card.addEventListener("click", function () {
    // list almacena todos los elementos con la clase is flipped
    flippedCards++;
    if (flippedCards == 1) {
      // el elemento if pregunta cuantos elementos hay en esa lista
      card.classList.toggle("is-flipped");
      pokeId1 = document.getElementById(card.firstElementChild.id);
      firstPokemon = card.firstElementChild.innerText;
      pokeId1.disabled = true;
      // pokeId1 almacena el id de la primera carta que se da vuelta
    } else {
      if (flippedCards == 2) {
        // el siguiente if pregunta si el ID almacenado es igual al ID de la carta actual
        card.classList.toggle("is-flipped");
        pokeId2 = document.getElementById(card.firstElementChild.id);
        secondPokemon = card.firstElementChild.innerText;
        pokeId2.disabled = true;
        flips++;
        showFlips.innerHTML = `Movimientos: ${flips}`;

        if (firstPokemon === secondPokemon) {
          flippedCards = 0;

          score++;
          showScore.innerHTML = `Aciertos: ${score}`;
        } else {
          // pokeId1.classList.toggle("is-flipped");
          // pokeId2.classList.toggle("is-flipped");

          pokeId1.disabled = false;
          pokeId2.disabled = false;
          eventFire(pokeId1, "click");
          eventFire(pokeId2, "click");

          flippedCards = 0;
        }
      }
    }
  });
}

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

// Resetear juego
// Sort arregla los elementos de un array dependiendo del criterio que nosotros querramos aplicar
// to string, convierte un objeto en un string, por ejemplo un numero dentro de un array
function resetGame() {
  card.sort(function () {
    return Math.random() - 0.5;
  });

  for (var index = 0; index < 18; index++) {
    let card = card[index].id;
    let dato = document.getElementById(index.toString());
    dato.dataset.valor = carta;
  }
}
