import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext);

  //   const mensaje = console.log("Mensaje");

  return (
    <section>
      <div className=" py-12 md:px-8 lg:px-16 flex flex-col space-y-12 text-black   ">
        <p>Carrito de compras</p>

        <div className="flex justify-between items-center w-full   text-xs text-white ">
          <Link to="/">
            <button className="button1  bg-aqua hover:bg-dark-green1">
              Continuar comprando
            </button>
          </Link>

          {/* {test.cartList.length > 0 ? (
            <button className="button1" onClick={test.removeList}>
              DELETE ALL PRODUCTS
            </button>
          ) : (
            <div className="button1">Your cart is empty</div>
          )} */}
          {test.cartList.length > 0 ? (
            <button className="button1 bg-pinky" onClick={test.removeList}>
              Limpiar carrito
            </button>
          ) : (
            <div>Carrito vacio</div>
          )}

          {/* <button className="button1 bg-pinky hover:bg-blanquito">
            Limpiar carrito
          </button> */}
        </div>

        <section>
          <div className="Contenedor ">
            {test.cartList.length > 0 ? (
              test.cartList.map((item) => (
                <div
                  key={item.idItem}
                  className="px-12 py-4 flex justify-between  w-full shadow-2xl p-4 "
                >
                  <div className="flex space-x-12">
                    <img className="h-44 " src={item.imgItem} />
                    <div className=" flex flex-col justify-center space-y-12 items-center">
                      <p className="text-xl">
                        <span className="font-bold">Producto: </span>{" "}
                        {item.nameItem}
                      </p>

                      <button
                        className="button1 text-sm w-44 text-white bg-orange"
                        type="filled"
                        onClick={() => test.deleteItem(item.idItem)}
                      >
                        Borrar
                      </button>
                    </div>
                  </div>
                  <div className=" text-xl px-4 flex flex-col justify-center items-end space-y-12 ">
                    <p>{item.qtyItem} Item(s)</p>
                    <p className="text-3xl">${item.costItem} each</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-xl font-bold text-center">
                Carrito Vacio :(
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;
