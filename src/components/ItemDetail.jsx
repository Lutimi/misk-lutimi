import React from "react";
import Cake from "../assets/images/Cake.png";
import AddToCart from "./button/AddToCart";
import AddItem from "./Cards/AddItem";

const ItemDetail = ({ item }) => {
  return (
    <>
      {
        <div className=" py-12 mx-auto max-w-7xl px-4 text-black grid  gap-x-4 grid-cols-2 place-content-center ">
          <img
            className="place-self-center rounded-2xl "
            src={item.imageSrc}
            alt=""
          />
          <div className="flex flex-col items-start justify-center space-y-4">
            <p className="font-bold text-2xl"> {item.name}</p>
            <p>{item.description}</p>

            <p className="font-semibold ">Precio:${item.price} </p>

            <h2>Stock: {item.stock} unidades</h2>

            <div className="flex space-x-4 ">
              <AddItem />
              <AddToCart name="AGREGAR PRODUCTO" />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ItemDetail;
