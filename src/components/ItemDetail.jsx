import React from "react";
import ItemCount from "./Cards/ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
  };

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
            <p className="font-bold text-2xl text-pinky "> {item.name}</p>
            <p>{item.description}</p>

            <p className="font-semibold ">Precio: ${item.price} </p>

            <h2>Stock: {item.stock} unidades</h2>

            <div className="flex space-x-4 ">
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ItemDetail;
