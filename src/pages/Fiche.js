import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Fiche = () => {
  const { id } = useParams(); // Récupération de l'ID dans l'URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://tyradex.vercel.app/api/v1/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Impossible de charger les données");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return <p>Aucun Pokémon trouvé.</p>;

  return (
    <div className="container">
      <Navigation />
      <div className="fiche-pokemon">
        <div
          className={`pokemon-wrap ${
            pokemon.types?.[0]?.name
              ?.toLowerCase()
              ?.normalize("NFD")
              ?.replace(/[\u0300-\u036f]/g, "") || "inconnu"
          }`}
        >
          <div className="img-pokemon">
            <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
          </div>
          <div className="infos-text">
            <h1>
              {pokemon.name.fr} (#{pokemon.pokedex_id})
            </h1>

            <h2>Stats</h2>
            <ul>
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${Math.min(pokemon.stats.atk, 100)}%` }}
                    aria-valuenow={pokemon.stats.atk}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Atk : {pokemon.stats.atk}%
                  </div>
                </div>
              </li>
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${Math.min(pokemon.stats.def, 100)}%` }}
                    aria-valuenow={pokemon.stats.def}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Def : {pokemon.stats.def}%
                  </div>
                </div>
              </li>

              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${Math.min(pokemon.stats.hp, 100)}%` }}
                    aria-valuenow={pokemon.stats.hp}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Hp : {pokemon.stats.hp}%
                  </div>
                </div>
              </li>

              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${Math.min(pokemon.stats.spe_atk, 100)}%`,
                    }}
                    aria-valuenow={pokemon.stats.spe_atk}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Spe_atk : {pokemon.stats.spe_atk}%
                  </div>
                </div>
              </li>
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${Math.min(pokemon.stats.spe_def, 100)}%`,
                    }}
                    aria-valuenow={pokemon.stats.spe_def}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Spe_def : {pokemon.stats.spe_def}%
                  </div>
                </div>
              </li>
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${Math.min(pokemon.stats.vit, 100)}%` }}
                    aria-valuenow={pokemon.stats.vit}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Vit : {pokemon.stats.vit}%
                  </div>
                </div>
              </li>
            </ul>
            <div className="container-mini-card">
              <div className="mini-card">
                <i class="bi bi-bookmark-heart"></i>
                <p>
                  <span>Type(s) :</span>
                  {pokemon.types.map((t) => t.name).join(", ")}
                </p>
              </div>
              <div className="mini-card">
                <i class="bi bi-arrows-vertical"></i>
                <p>
                  <span>Taille :</span>
                  {pokemon.height}
                </p>
              </div>
              <div className="mini-card">
                <i class="bi bi-arrows"></i>
                <p>
                  <span>Poids :</span>
                  {pokemon.weight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fiche;
