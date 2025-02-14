import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="container about">
      <Navigation />
      <h1>À propos</h1>
      <p>
        Bienvenue sur notre Pokédex, l’encyclopédie ultime dédiée aux Pokémon !
        Que vous soyez un dresseur débutant ou un expert de la stratégie, notre
        plateforme vous permet d’explorer et de découvrir des centaines de
        Pokémon avec des fiches détaillées.
      </p>
      <h2>Un outil complet pour les fans de Pokémon</h2>
      <p>
        Notre Pokédex vous offre :
        <br />
        <br />
        🔍 Une recherche intuitive :
        <br />
        Trouvez rapidement un Pokémon par son nom, son type ou son numéro dans
        le Pokédex.
        <br />
        <br />
        📊 Des statistiques détaillées :
        <br />
        Découvrez les points forts et les faiblesses de chaque Pokémon, avec des
        barres de progression pour visualiser leurs stats.
        <br />
        <br />
        🔥 Des fiches complètes :
        <br />
        Accédez aux informations essentielles : types, statistiques et bien plus
        encore.
      </p>
      <h2>Pourquoi ce Pokédex ?</h2>
      <p>
        Passionnés par l’univers Pokémon, nous avons créé cet outil pour
        rassembler toutes les informations utiles en un seul endroit. Que ce
        soit pour en apprendre plus sur vos Pokémon préférés ou pour préparer
        votre prochaine équipe de combat, notre Pokédex est là pour vous guider.
        Prêt à explorer le monde des Pokémon ? Recherchez dès maintenant votre
        créature favorite !
      </p>

      <Footer />
    </div>
  );
};

export default About;
