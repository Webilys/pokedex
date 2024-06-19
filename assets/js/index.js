// affiche la section Bienvenue au chargement de la page

const sectionBienvenue = document.getElementById("bienvenue");
const sectionFalse = document.getElementById("sectionFalse");

const fichePokemon = document.querySelector(".fichePokemon");

sectionBienvenue.style.display = "flex";
sectionFalse.style.display = "none";

fichePokemon.style.display = "none";

function windowLoad() {
  searchPokemon.value = null;
}

function reset() {
  sectionBienvenue.style.display = "flex";
  fichePokemon.style.display = "none";
}

//Rechercher un pokemon

function research() {
  const searchPokemon = document.getElementById("searchPokemon");
  const sectionPokemon = document.getElementById(
    searchPokemon.value.toLocaleLowerCase()
  );
  reset();
  sectionBienvenue.style.display = "none";
  sectionPokemon.style.display = "grid";

  //------------Ajouter le message en cas d'erreur--------------
}
