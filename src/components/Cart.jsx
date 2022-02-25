import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext);
  return (
    <section>
      <div className=" py-12 md:px-8 lg:px-16 flex flex-col space-y-12 text-black justify-center items-center ">
        <p>Carrito de compras</p>

        <div className="flex justify-between items-center w-full   text-xs text-white ">
          <Link to="/">
            <button className="button1  bg-aqua hover:bg-dark-green1">
              Continuar comprando
            </button>
          </Link>

          {test.cartList.length > 0 ? (
            <button className="" type="filled" onClick={test.removeList}>
              DELETE ALL PRODUCTS
            </button>
          ) : (
            <button>Your cart is empty</button>
          )}
          <button className="button1 bg-pinky hover:bg-blanquito">
            Limpiar carrito
          </button>
        </div>

        <section>
          <div className="grid cols-1 p-4 drop-shadow-lg ">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <img className="h-44 "
                  src="https://image.shutterstock.com/shutterstock/photos/1189409857/display_1500/stock-photo-tasty-chocolate-cupcake-on-white-background-1189409857.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-center">
                  <p>Producto</p>

                  <button className="button1 text-sm bg-aqua"> Borrar</button>
                </div>
              </div>

              
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;
