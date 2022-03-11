import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
// import db from "../utils/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  // console.log(idCategory);

  //componentDidUpdate
  useEffect(() => {
    firestoreFetch(idCategory)
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
