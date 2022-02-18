import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";


const ItemDetailContainer = () => {
  const [producto, setproducto] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      200,
      products.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setproducto(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetail item={producto} />;
};

export default ItemDetailContainer;
