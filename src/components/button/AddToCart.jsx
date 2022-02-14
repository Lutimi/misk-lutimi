import React from "react";

function AddToCart(props) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm
      font-medium rounded-md shadow-sm text-white bg-aqua hover:bg-dark-green1 focus:outline-none focus:ring-2 
      focus:ring-offset-2 focus:ring-dark-green1"
    >
      {props.name}
    </button>
  );
}

export default AddToCart;
