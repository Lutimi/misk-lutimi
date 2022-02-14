import React from "react";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import { useState } from "react";

const AddItem = (props) => {
  const [items, setItems] = useState(0); //HOOKS

  const increment = () => {
    // items += 1;
    setItems(items + 1);
    console.log(items);
  };
  const decrement = () => {
    // items -= 1;
    setItems(items - 1);
  };

  return (
    <div className="card flex space-x-8 justify-between ">
      <button onClick={() => increment()}>
        <Plus />
      </button>
      <div> {items} </div>

      <button onClick={decrement}>
        <Minus />
      </button>
    </div>
  );
};

export default AddItem;
