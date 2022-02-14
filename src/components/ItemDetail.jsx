import React from "react";
import Cake from "../assets/images/Cake.png";
import AddToCart from "./button/AddToCart";
import AddItem from "./Cards/AddItem";

const ItemDetail = (props) => {
  return (
    <div className=" py-12 mx-auto max-w-7xl px-4 item-detail text-black grid  grid-cols-2 place-content-center ">
      <img className="place-self-center" src={Cake} alt="" />
      <div className="flex flex-col items-start justify-center space-y-4">
        <div> {props.name}</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          voluptatibus eveniet maiores aliquam, reprehenderit quaerat rerum
          itaque tempora inventore consequatur illo necessitatibus odit repellat
          numquam, vitae nobis perspiciatis! Hic, laudantium!
        </p>

        <h1>Precio:${props.precio}25 </h1>

        <h2>Stock: {props.stock}10 unidades</h2>

        <div className="flex space-x-4 ">
          <AddItem />
          <AddToCart name="AGREGAR PRODUCTO" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
