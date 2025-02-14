import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Pokemon = () => {
  const [data, setData] = useState([]); // Stocke tous les Pokémon
  const [visibleCount, setVisibleCount] = useState(12); // Nombre de Pokémon affichés
  const [searchTerm, setSearchTerm] = useState(""); // Stocke la recherche

  useEffect(() => {
    axios
      .get("https://tyradex.vercel.app/api/v1/pokemon")
      .then((response) => {
        setData(response.data); // Stocke tous les Pokémon récupérés
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);

  // Fonction pour gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    setVisibleCount(data.length); // Afficher tous les résultats
  };

  // Fonction pour filtrer les Pokémon
  const filteredData = data
    .slice(1) // Exclut le premier élément buggé
    .filter((pokemon) => {
      const nameFr = pokemon.name.fr.toLowerCase();
      const nameEn = pokemon.name.en.toLowerCase();
      const category = pokemon.types?.[0]?.name?.toLowerCase() || "";
      const id = String(pokemon.pokedex_id); // Convertir l'ID en string

      return (
        nameFr.includes(searchTerm.toLowerCase()) ||
        nameEn.includes(searchTerm.toLowerCase()) ||
        category.includes(searchTerm.toLowerCase()) ||
        id.includes(searchTerm)
      );
    });

  return (
    <div>
      {/* Formulaire de recherche */}
      <form id="search-pokemon" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Nom, catégorie, ID ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Met à jour l'état
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>

      {/* Liste des Pokémon filtrés */}
      <ul className="pokemon-list">
        {filteredData.slice(0, visibleCount).map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </ul>

      {/* Bouton Voir plus */}
      {visibleCount < filteredData.length && (
        <button
          className="button"
          onClick={() => setVisibleCount(visibleCount + 12)}
        >
          Voir plus
        </button>
      )}
    </div>
  );
};

export default Pokemon;
