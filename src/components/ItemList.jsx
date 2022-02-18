import React from "react";
import Item from "./Cards/Item";
const ItemList = ({ items }) => {
  return (
    <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            imageSrc={item.imageSrc}
            price={item.price}
            stock={item.stock}
          />
        ))
      ) : (
        <p>Esperando</p>
      )}
    </div>
  );
};

export default ItemList;
