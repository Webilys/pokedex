import React from "react";
import Navigation from "../components/Navigation";
import Pokemon from "../components/Pokemon";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <Pokemon />
      <Footer />
    </div>
  );
};

export default Home;
