
import React from 'react';
import miniImagen from "../assets/images/Character.png"
import Imagen from "../assets/images/Logo.png"
import Navbar from "../components/NavBar";
import Footer from "../components/footer"

const Home = () => {
  return (<div>
      <Navbar first="Inicio" second="Proyectos" Logo={Imagen} miniLogo={miniImagen}  />
    <Footer className="fixed inset-x-0 bottom-0" />
  </div> ) ;
}

export default Home;
