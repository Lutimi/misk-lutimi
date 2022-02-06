import React from "react";
import miniImagen from "../assets/images/Character.png";
import Imagen from "../assets/images/Logo.png";
import Navbar from "../components/NavBar";
// import Navbar2 from "../components/Navbar2"
import Footer from "../components/footer";
import ItemListCoinainer from "../components/ItemList";
import AddItem from "../components/Cards/AddItem";



const Home = () => {
  return (
    <div className="h-screen maw-w-7xl px-4 mx-auto">
      <Navbar
        first="Inicio"
        second="Proyectos"
        Logo={Imagen}
        miniLogo={miniImagen}
      />

    

      <div className="flex justify-center items-center my-4">
        <AddItem />
      </div>

      <ItemListCoinainer />

      <Footer className="fixed inset-x-0 bottom-0" />
    </div>
  );
};

export default Home;
