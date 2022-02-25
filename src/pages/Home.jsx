import React from "react";
import ItemListCoinainer from "../components/ItemListContainer";
import miniImagen from "../assets/images/Character.png";
import Imagen from "../assets/images/Logo.png";
import Footerr from "../components/Footerr";
import Navbar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetail from "../components/ItemDetail";

import  CartContext  from "../components/CartContext";

// url params
const Home = () => {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar
          first="Productos"
          second="Postres"
          third="Platos"
          fourth="Desayunos"
          Logo={Imagen}
          miniLogo={miniImagen}
        />
        <div className="maw-w-7xl px-4 mx-auto  ">
          <Routes>
            <Route path="/" element={<ItemListCoinainer />}></Route>
            <Route path="/item" element={<ItemDetail />}></Route>
            <Route
              path="/category/:idCategory"
              element={<ItemListCoinainer />}
            ></Route>
            <Route
              path="/item/:idItem"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footerr />
        </div>
      </BrowserRouter>
    </CartContext>
  );
};

export default Home;
