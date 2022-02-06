import React from "react";


function ItemCard({ id, imageSrc, imageAlt, href, name, sabor, price }) {
  //Object destructuring
  return (
    <div className="group relative  drop-shadow-2xl">
      <div
        className="w-full  min-h-80 bg-gray-200  aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-3/4
    lg:aspect-none aspect-v"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center  lg:w-full lg:h-/4"
        />
      </div>
      <div className="mt-4 flex w-3/4 justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{sabor}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
