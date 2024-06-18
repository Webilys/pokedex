// affiche la section Bienvenue au chargement de la page

const sectionBienvenue = document.getElementById("Bienvenue");
const fichePokemon = document.querySelector(".fichePokemon");

function windowLoad() {
  sectionBienvenue.style.display = "block";
  fichePokemon.style.display = "none";
}
