import React from "react";
import AddToCart from "../button/AddToCart";
import { Link } from "react-router-dom";

function ItemCard({ id, imageSrc, imageAlt, href, name, sabor, price }) {
  //Object destructuring
  return (
    <div className="group relative flex flex-col space-y-2  drop-shadow-2xl card">
      <div
        className="w-full  min-h-80   aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-3/4
    lg:aspect-none aspect-v"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center  lg:w-full lg:h-/4"
        />
      </div>
      <div className="mt-4 flex w-4/4 justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a className="text-base font-bold " href={href}>
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{sabor}</p>
        </div>
        <div className="flex flex-col justify-center items-end  ">
          <p className=" font-medium text-xl text-gray-900">${price}</p>
        </div>
      </div>

      <div className=" flex justify-center items-center  ">
        <AddToCart name="Comprar" />
        <Link to="/detail">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-dark-green1 hover:text-pinky "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
