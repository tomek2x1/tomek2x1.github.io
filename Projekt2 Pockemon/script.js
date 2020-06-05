let pokemons = [];
let pokemonsArray = [];
let pokemonArray = [];
const boardHTML = document.getElementById("board");
const button = document.getElementById("button");
const dots = document.getElementById("dots");
const searchInput = document.getElementById("search");

let quanPokemon = 0;

const showCard = (id, name, number, imgURL, type, subtype, rar) => {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `
        <div class="card__wrapper">
          <h3 class="card__name">${name}</h3>
          <p class="card__number">Nr: ${number}</p>
        </div>
        <img class="card__img" id="${id}" src="${imgURL}" alt="${name}" />
        <p class="card__data">
          <span class="card__data--weight">Supertype: </span>${type}
        </p>
        <p class="card__data">
          <span class="card__data--weight">Subtype: </span>${subtype}
        </p>
        <p class="card__data">
          <span class="card__data--weight">Rarity: </span>${rar}
        </p>
    `;
  boardHTML.appendChild(div);
};

const fetchAPI = () => {
  // Hide button and show preloader
  button.classList.add("hide");
  dots.classList.remove("hide");

  fetch(`https://api.pokemontcg.io/v1/cards`)
    .then((response) => response.json())
    .then((response) => {
      pokemons = response.cards;
      console.log(pokemons);
      const quanPokemonInRow = quanPokemon + 3;
      for (quanPokemon; quanPokemon <= quanPokemonInRow; quanPokemon++) {
        const card = response.cards[quanPokemon];
        showCard(
          card.id,
          card.name,
          card.number,
          card.imageUrl,
          card.supertype,
          card.subtype,
          card.rarity
        );
        pokemonsArray.push(card.name);
      }
      // Hide preloader and show button
      dots.classList.add("hide");
      button.classList.remove("hide");
    })
    .catch((error) => {
      document.write(`Błąd ${error}`);
    });
};

button.addEventListener("click", fetchAPI);
document.addEventListener("DOMContentLoaded", fetchAPI);

// Search Pokemon
const searchPokemon = (e) => {
  const value = e.target.value;
  pokemonArray = pokemonsArray.filter((pokemon) => {
    pokemon.includes(value);
  });
  console.log(pokemonArray);
};

searchInput.addEventListener("input", searchPokemon);
