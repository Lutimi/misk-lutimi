import React from "react";
import Home from "./pages/Home";

import miniImagen from "./assets/images/Character.png";
import Imagen from "./assets/images/Logo.png";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
function app() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default app;
