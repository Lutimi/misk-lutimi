import React from "react";
import { Link } from "react-router-dom";

function AddToCart() {
  return (
    <Link
      to="/cart"
      className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm
    font-medium rounded-md shadow-sm text-white bg-aqua hover:bg-dark-green1 focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-dark-green1"
    >
      <button type="button">Add to Cart</button>
    </Link>
  );
}

export default AddToCart;
