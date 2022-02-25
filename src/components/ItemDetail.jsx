import React from "react";
import ItemCount from "./Cards/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
    test.addToCart(item, qty);
  };
  return (
    <>
      {item && item.imageSrc ? (
        <div className=" py-12 mx-auto max-w-7xl px-4 text-black grid  gap-x-4 grid-cols-2 place-content-center ">
          <img
            className="place-self-center rounded-2xl "
            src={item.imageSrc}
            alt=""
          />
          <div className="flex flex-col items-start justify-center space-y-4">
            <p className="font-bold text-2xl text-pinky "> {item.name}</p>
            <p>{item.description}</p>

            <p className="font-semibold ">Precio: ${item.price} </p>

            <h2>Stock: {item.stock} unidades</h2>

            {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> */}
            <div className="flex space-x-4 ">
              {itemCount === 0 ? (
                <ItemCount
                  stock={item.stock}
                  initial={itemCount}
                  onAdd={onAdd}
                />
              ) : (
                <Link to="/cart">
                  <button className="button1 text-white bg-red-600">
                    CheckOut
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ItemDetail;
