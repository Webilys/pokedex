import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Creer from "./pages/Creer";
import Error from "./pages/Error";
import About from "./pages/About";
import Fiche from "./pages/Fiche";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/creer-un-pokemon" element={<Creer />} />
        <Route path="/pokemon/:id" element={<Fiche />} />{" "}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
