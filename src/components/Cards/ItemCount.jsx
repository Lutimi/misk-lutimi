import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import { useState, useEffect } from "react";
import AddToCart from "../button/AddToCart";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);
  //HOOKS
  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 justify-between">
      <div className="card flex items-center space-x-8 justify-between ">
        <button onClick={() => increment()}>
          <Plus />
        </button>
        <div> {count} </div>

        <button onClick={decrement}>
          <Minus />
        </button>
      </div>
      {stock && count ? (
        <AddToCart onClick={() => onAdd(count)} name="Add to Cart" />
      ) : (
        <AddToCart onClick={() => onAdd(count)} name="Add to Cart" />
      )}
    </div>
  );
};

export default ItemCount;
