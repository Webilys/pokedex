import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon }) => {
  console.log(pokemon);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.pokedex_id}`);
  };

  return (
    <li className="card" onClick={handleClick}>
      <div className="pokemon-container">
        <div
          className={`pokemon-wrap ${
            pokemon.types?.[0]?.name
              ?.toLowerCase()
              ?.normalize("NFD")
              ?.replace(/[\u0300-\u036f]/g, "") || "inconnu"
          }`}
        >
          <div>
            <img
              src={pokemon.sprites.regular}
              alt={pokemon.name?.fr || "Pokémon"}
            />
          </div>
          <div className="pokemon-infos">
            <p className="id-pokemon">{"#" + pokemon.pokedex_id ?? ""}</p>
            <h2>{pokemon.name.fr}</h2>
            <p className="category-pokemon">
              {pokemon.types?.[0]?.name ?? "inconnu"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
