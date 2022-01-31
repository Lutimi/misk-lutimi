
import React from 'react';
import miniImagen from "../assets/images/Character.png"
import Imagen from "../assets/images/Logo.png"
import Navbar from "../components/NavBar";
// import Navbar2 from "../components/Navbar2"
import Footer from "../components/footer"
import ItemListCoinainer from "../components/ItemListCoinainer"


const Home = () => {
  return (
  <div className="h-screen">
      <Navbar first="Inicio" second="Proyectos" Logo={Imagen} miniLogo={miniImagen}  />
      {/* <Navbar2 first="Inicio" second="Proyectos" Logo={Imagen} miniLogo={miniImagen}  /> */}
      <ItemListCoinainer/>

  


    <Footer className="fixed inset-x-0 bottom-0" />
  </div> ) ;
}

export default Home;
