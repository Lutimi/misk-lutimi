import React from "react";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router";
import { products } from "../utils/products";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  // console.log(idCategory);

  //componentDidUpdate
  useEffect(() => {
    customFetch(
      200,
      products.filter((item) => {
        if (idCategory === undefined) return item;
        return item.categoryId === idCategory;
      })
    )
      .then((result) => setProductos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {idCategory}
          </h2>

          <ItemList items={productos} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
