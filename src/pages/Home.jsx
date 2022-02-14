import React from "react";
import ItemListCoinainer from "../components/ItemList";
import miniImagen from "../assets/images/Character.png";
import Imagen from "../assets/images/Logo.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";

// url params
const Home = () => {
  return (
    <BrowserRouter>
      <div className=" body  maw-w-7xl px-4 mx-auto">
        <Navbar
          first="Productos"
          second="Postres"
          third="Postres"
          Logo={Imagen}
          miniLogo={miniImagen}
        />

        <Routes>
          <Route path="/" element={<ItemListCoinainer />}></Route>
          <Route path="/item" element={<ItemDetail />}></Route>
          <Route path="/category/:Categoryid" element={<ItemDetail />}></Route>
          <Route path="/detail" element={<ItemDetail />}></Route>
        </Routes>
        <Footer className="fixed inset-x-0 bottom-0" />
      </div>
    </BrowserRouter>
  );
};

export default Home;
