import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const Creation = () => {
  const [imgPokemon, setImgPokemon] = useState(null);
  const [namePokemon, setNamePokemon] = useState("Nom");
  const [pokemonId, setIdPokemon] = useState("000");
  const [typePokemon, setTypePokemon] = useState("inconnu");
  const [heightPokemon, setHeightPokemon] = useState("0 m");
  const [widthPokemon, setWidthPokemon] = useState("0 kg");
  const [atkPokemon, setAtkPokemon] = useState("50");
  const [defPokemon, setDefPokemon] = useState("50");
  const [hpPokemon, setHpPokemon] = useState("50");
  const [speAtkPokemon, setSpeAtkPokemon] = useState("50");
  const [speDefPokemon, setSpeDefPokemon] = useState("50");
  const [vitPokemon, setVitPokemon] = useState("50");

  const printRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImgPokemon(imageUrl);
    }
  };

  const handleGeneratePdf = () => {
    const element = printRef.current;

    html2pdf()
      .from(element)
      .set({
        filename: `${namePokemon}_carte.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          orientation: "landscape",
        },
      })
      .save();
  };

  return (
    <div className="container pokemon-creation-container">
      <h1>Créer un pokemon</h1>

      <div className="creation-card">
        <div className="visualisation" ref={printRef}>
          {
            <div className="pokemon-container">
              <div
                className={`pokemon-wrap ${
                  typePokemon
                    ?.toLowerCase()
                    ?.normalize("NFD")
                    ?.replace(/[\u0300-\u036f]/g, "") || "inconnu"
                }`}
              >
                <div>
                  <img
                    src={imgPokemon || "./favicon.ico"}
                    alt={namePokemon || "Pokémon"}
                  />
                </div>
                <div className="pokemon-infos">
                  <div className="infos-text">
                    <h1>
                      {namePokemon} (#{pokemonId})
                    </h1>

                    <h2>Stats</h2>
                    <ul>
                      <li>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${Math.min(atkPokemon, 100)}%`,
                            }}
                            aria-valuenow={atkPokemon}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Atk : {atkPokemon}%
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${Math.min(defPokemon, 100)}%`,
                            }}
                            aria-valuenow={defPokemon}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Def : {defPokemon}%
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${Math.min(hpPokemon, 100)}%` }}
                            aria-valuenow={hpPokemon}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Hp : {hpPokemon}%
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${Math.min(speAtkPokemon, 100)}%`,
                            }}
                            aria-valuenow={speAtkPokemon}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Spe_atk : {speAtkPokemon}%
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${Math.min(speDefPokemon, 100)}%`,
                            }}
                            aria-valuenow={speDefPokemon}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Spe_def : {speDefPokemon}%
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${Math.min(vitPokemon, 100)}%`,
                            }}
                            aria-valuenow={vitPokemon}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Vit : {vitPokemon}%
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="container-mini-card">
                      <div className="mini-card">
                        <i className="bi bi-bookmark-heart"></i>
                        <p>
                          <span>Type(s) : </span>
                          {typePokemon}
                        </p>
                      </div>
                      <div className="mini-card">
                        <i className="bi bi-arrows-vertical"></i>
                        <p>
                          <span>Taille : </span>
                          {heightPokemon}
                        </p>
                      </div>
                      <div className="mini-card">
                        <i className="bi bi-arrows"></i>
                        <p>
                          <span>Poids : </span>
                          {widthPokemon}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div className="creation">
          <form>
            <div className="form-container">
              <label htmlFor="img">Image :</label>
              <input
                type="file"
                name="img"
                id="img"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label htmlFor="id">ID : </label>
              <input
                type="text"
                id="id"
                pattern="[0-9]+"
                placeholder="ID"
                onChange={(e) => {
                  setIdPokemon(e.target.value);
                }}
              />
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                placeholder="Nom du pokémon"
                onChange={(e) => {
                  setNamePokemon(e.target.value);
                }}
              />
              <label htmlFor="types">Type : </label>
              <select
                name="types"
                id="types"
                onChange={(e) => {
                  setTypePokemon(e.target.value);
                }}
              >
                <option value="Inconnu">Inconnu</option>
                <option value="Normal">Normal</option>
                <option value="Combat">Combat</option>
                <option value="Vol">Vol</option>
                <option value="Poison">Poison</option>
                <option value="Sol">Sol</option>
                <option value="Roche">Roche</option>
                <option value="Insecte">Insecte</option>
                <option value="Spectre">Spectre</option>
                <option value="Acier">Acier</option>
                <option value="Feu">Feu</option>
                <option value="Eau">Eau</option>
                <option value="Plante">Plante</option>
                <option value="Électrik">Electrik</option>
                <option value="Psy">Psy</option>
                <option value="Glace">Glace</option>
                <option value="Dragon">Dragon</option>
                <option value="Ténèbres">Ténèbres</option>
                <option value="Fée">Fée</option>
                <option value="Stellaire">Stellaire</option>
              </select>
              <label htmlFor="name">Taille :</label>

              <input
                type="text"
                pattern="[0-9,]+"
                placeholder="Taille (en m)"
                onChange={(e) => {
                  setHeightPokemon(e.target.value + " m");
                }}
              />
              <label htmlFor="name">Poids :</label>

              <input
                type="text"
                pattern="[0-9,]+"
                placeholder="Poids (en kg)"
                onChange={(e) => {
                  setWidthPokemon(e.target.value + " kg");
                }}
              />
              <label>Stats : </label>
              <div className="stats-range">
                <label htmlFor="atk">Atk : </label>
                <input
                  type="range"
                  name="atk"
                  id="atk"
                  onChange={(e) => {
                    setAtkPokemon(e.target.value);
                  }}
                />
                <label htmlFor="def">Def : </label>
                <input
                  type="range"
                  name="def"
                  id="def"
                  onChange={(e) => {
                    setDefPokemon(e.target.value);
                  }}
                />
                <label htmlFor="hp">Hp : </label>
                <input
                  type="range"
                  name="hp"
                  id="hp"
                  onChange={(e) => {
                    setHpPokemon(e.target.value);
                  }}
                />
                <label htmlFor="spe_atk">Spe_atk : </label>
                <input
                  type="range"
                  name="spe_atk"
                  id="spe_atk"
                  onChange={(e) => {
                    setSpeAtkPokemon(e.target.value);
                  }}
                />
                <label htmlFor="spe_def">Spe_def : </label>
                <input
                  type="range"
                  name="spe_def"
                  id="spe_def"
                  onChange={(e) => {
                    setSpeDefPokemon(e.target.value);
                  }}
                />
                <label htmlFor="vit">Vit : </label>
                <input
                  type="range"
                  name="vit"
                  id="vit"
                  onChange={(e) => {
                    setVitPokemon(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              className="button"
              onClick={handleGeneratePdf}
            >
              Télécharger la fiche
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Creation;
