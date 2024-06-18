// affiche la section Bienvenue au chargement de la page

const sectionBienvenue = document.getElementById("bienvenue");
const fichePokemon = document.querySelector(".fichePokemon");

function windowLoad() {
  sectionBienvenue.style.display = "flex";
  fichePokemon.style.display = "none";
}

//Rechercher un pokemon
const searchPokemon = document.getElementById("searchPokemon");
const searchPokemonUnit = searchPokemon.value;
const pokemon = searchPokemonUnit;

//----------- A CORRIGER -------------------
if (searchPokemonUnit === "pikachu") {
  sectionBienvenue.style.display = "none";
  searchPokemonUnit.style.display = "grid";
}
