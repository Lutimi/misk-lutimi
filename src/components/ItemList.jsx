import React, { useEffect, useState } from "react";
import ItemCard from "./Cards/Item";
// import Darcupcake from "../assets/images/Darkcupcake.png";
// import Desayuno from "../assets/images/Desayuno.png";
// import Food from "../assets/images/Food.png";
// import Helado from "../assets/images/Helado.png";
// import miniCake from "../assets/images/miniCake.png";
// import pinkycupcake from "../assets/images/pinkycupcake.png";
// import Waffle from "../assets/images/Waffle.png";


const products = [
  {
    id: 1,
    name: "Cupcake ",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/fc/75/5f/fc755f1244dd0f9f0174bb50fc519c89.png",
    imageAlt: "Sabores combinados",
    price: 35,
    stock: 12,
    sabor: "Fresa",
  },
  {
    id: 2,
    name: "Torta de chocolate ",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/fc/75/5f/fc755f1244dd0f9f0174bb50fc519c89.png",
    imageAlt: "Sabores combinados",
    price: 15,
    stock: 12,
    sabor: "Fresa",
  },
  {
    id: 3,
    name: "Tamales ",
    href: "#",
    imageSrc:
      "https://static.wixstatic.com/media/a4f621_a39ac77966b9412bae238e99bc8b42d8~mv2_d_3024_3024_s_4_2.png/v1/fill/w_500,h_500,al_c,q_90/file.jpg",
    imageAlt: "Sabores combinados",
    price: 20,
    stock: 12,
    sabor: "asdasd",
  },
  {
    id: 4,
    name: "Cupcake vainilla ",
    href: "#",
    imageSrc:
      "https://s-media-cache-ak0.pinimg.com/originals/fc/75/5f/fc755f1244dd0f9f0174bb50fc519c89.png",
    imageAlt: "Sabores combinados",
    price: 19,
    stock: 12,
    sabor: "Fresa",
  },
  {
    id: 5,
    name: "Cupcake chocolate",
    href: "#",
    imageSrc:
      "https://image.shutterstock.com/shutterstock/photos/1189409857/display_1500/stock-photo-tasty-chocolate-cupcake-on-white-background-1189409857.jpg",
    imageAlt: "Sabores combinados",
    price: 28,
    stock: 12,
    sabor: "Fresa",
  },
];

let error = "No se pudo obtener la data";

const customFetch = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        resolve(data);
      } else {
        reject("error");
      }
    }, 2000);
  });
};

customFetch(products)
  .then((data) => data)
  .catch((error) =>
    console.log("Hubo un error Ver los resultados aqui: ", error)
  );

function getProducts() {
  return customFetch(products);
}

/* ComponentDidMount */
const useProducts = () => {
  const [products, setProductos] = useState([]); // Hooks

  useEffect(() => {
    getProducts().then((data) => setProductos(data));
    // console.log(getProducts());
  }, []);
  return products;
};

const ItemListCoinainer = () => {
  const data = useProducts();
  // useProducts();
  //   console.log(useProducts());
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Productos
          </h2>

          <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
            {data.map((products) => (
              <ItemCard key={products.id} {...products} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListCoinainer;
