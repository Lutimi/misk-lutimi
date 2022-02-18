import React from "react";
import ItemListCoinainer from "../components/ItemListContainer";
import miniImagen from "../assets/images/Character.png";
import Imagen from "../assets/images/Logo.png";
import Footerr from "../components/Footerr";
import Navbar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";

// url params
const Home = () => {
  return (
    <BrowserRouter>
      <div className=" body  maw-w-7xl px-4 mx-auto">
        <Navbar
          first="Productos"
          second="Postres"
          third="Platos"
          fourth="Desayunos"
          Logo={Imagen}
          miniLogo={miniImagen}
        />

        <Routes>
          <Route path="/" element={<ItemListCoinainer />}></Route>
          <Route path="/item" element={<ItemDetail />}></Route>
          <Route
            path="/category/:idCategory"
            element={<ItemListCoinainer />}
          ></Route>
          <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
        </Routes>
        <Footerr />
      </div>
    </BrowserRouter>
  );
};

export default Home;
