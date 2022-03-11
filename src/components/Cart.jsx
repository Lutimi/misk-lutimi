import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

import db from "../utils/firebaseConfig";
const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    let order = {
      buyer: {
        email: "misaticona@hotmail.com",
        name: "Luis Ticona",
        phone: "972730589",
      },
      date: serverTimestamp(),
      items: test.cartList.map((it) => {
        return {
          id: it.idItem,
          price: it.precioItem,
          title: it.nameItem,
          qty: it.qtyItem,
        };
      }),
      total: test.calcTotal(),
    };
    console.log(order);

    //   const mensaje = console.log("Mensaje");

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Tu orden ha sido creada. Toma nota del id de tu pedido.\n\n\nOrder ID: " +
            result.id +
            "\n\n"
        )
      )
      .catch((err) => console.log(err));

    test.removeList();
  };

  return (
    <section>
      <div className=" py-12 md:px-8 lg:px-4 flex flex-col space-y-12 text-black   ">
        <p>Tu Carrito de compras</p>

        <div className="flex justify-between items-center w-full   text-xs text-white ">
          <Link to="/">
            <button className="button1  bg-aqua hover:bg-dark-green1">
              Continuar comprando
            </button>
          </Link>

          {test.cartList.length > 0 ? (
            <button
              type="filled"
              className="button1 bg-pinky"
              onClick={test.removeList}
            >
              Limpiar carrito
            </button>
          ) : (
            <div>Carrito vacio</div>
          )}

          {/* <button className="button1 bg-pinky hover:bg-blanquito">
            Limpiar carrito
          </button> */}
        </div>

        <section className=" grid grid-col-1   md:grid-cols-3 lg:grid-cols-5  gap-4">
          <div className=" col-span-3  ">
            {test.cartList.length > 0 ? (
              test.cartList.map((item) => (
                <div
                  key={item.idItem}
                  className=" px-4 lg:px-12 py-4 flex justify-between  w-full shadow-2xl p-4 "
                >
                  <div className="flex space-x-12">
                    <img className="h-44 " src={item.imgItem} />
                    <div className=" flex flex-col justify-center space-y-12 items-start">
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
                  <div className=" text-xl px-4 flex flex-col items-center justify-center space-y-12 ">
                    <p>{item.qtyItem} Item(s)</p>
                    <p className=" md:text-base lg:text-xl">
                      ${item.precioItem} each
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-xl font-normal text-center">
                Carrito vacio
              </div>
            )}
          </div>
          {test.cartList.length > 0 && (
            <div className="col-span-2 shadow-lg p-4  border border-black rounded-lg ">
              <div className="flex flex-col justify-center items-center space-y-4  ">
                <p className="text-2xl"> Resumen de compra</p>
                <div className="flex justify-between w-full ">
                  <p>Subtotal</p>
                  <p>{test.calcSubTotal()} </p>
                </div>
                <div className="flex justify-between w-full ">
                  <p>IGV</p>
                  <p>{test.calcTaxes()} </p>
                </div>
                <div className="flex justify-between w-full ">
                  <p>Descuento</p>
                  <p>{-test.calcTaxes()} </p>
                </div>
                <div className="flex justify-between w-full font-bold">
                  <p>Total</p>
                  <p> {test.calcTotal()}</p>
                </div>
                <button
                  type="filled"
                  className="button1 bg-aqua text-white w-full hover:text-green-700"
                  onClick={createOrder}
                >
                  Checkout now
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Cart;
