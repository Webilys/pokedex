// Affiche la section Bienvenue au chargement de la page
const sectionBienvenue = document.getElementById("bienvenue");
const sectionFalse = document.getElementById("sectionFalse");
const fichePokemon = document.querySelectorAll(".fichePokemon");

// Initialiser les sections
sectionBienvenue.style.display = "flex";
sectionFalse.style.display = "none";
fichePokemon.forEach((fiche) => (fiche.style.display = "none"));

window.onload = function () {
  const searchPokemon = document.getElementById("searchPokemon");
  if (searchPokemon) {
    searchPokemon.value = "";
  }
};

// Réinitialiser les affichages
function reset() {
  fichePokemon.forEach((fiche) => (fiche.style.display = "none"));
  sectionFalse.style.display = "none";
}

// Rechercher un Pokémon
function research() {
  const searchPokemon = document.getElementById("searchPokemon");
  const searchValue = searchPokemon.value.toLowerCase();

  // Efface la section bienvenue
  sectionBienvenue.style.display = "none";

  // Effacer la section Pokémon précédemment affichée
  reset();

  // Trouver et afficher la fiche Pokémon correspondante
  const sectionPokemon = document.getElementById(searchValue);
  if (sectionPokemon) {
    sectionPokemon.style.display = "grid";
  } else {
    // Afficher la sectionFalse si la recherche ne correspond à aucune section Pokémon
    sectionFalse.style.display = "flex";
  }
}
