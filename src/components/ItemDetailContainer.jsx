import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firesoreFetch";

const ItemDetailContainer = () => {
  const [producto, setproducto] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => setproducto(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetail item={producto} />;
};

export default ItemDetailContainer;
