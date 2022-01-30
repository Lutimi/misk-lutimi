import React from "react";
import miniImagen from "./assets/images/Character.png"
import Imagen from "./assets/images/Logo.png"


import Navbar from "./components/NavBar";
function app() {
  return (
    <div className="App">
      {/* <h1 className="font-bold text-red-500">Prueba</h1> */}
      <Navbar first="Inicio" second="Proyectos" Logo={Imagen} miniLogo={miniImagen}  />
    </div>
  );
}

export default app;
