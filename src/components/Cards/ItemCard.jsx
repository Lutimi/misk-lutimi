import React from "react";

const products = [
  {
    id: 1,
    name: "Cupcake ",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/fc/75/5f/fc755f1244dd0f9f0174bb50fc519c89.png",
    imageAlt: "Sabores combinados",
    price: "$15",
    sabor: "Fresa",
  },
  {
    id: 1,
    name: "Cupcake ",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/fc/75/5f/fc755f1244dd0f9f0174bb50fc519c89.png",
    imageAlt: "Sabores combinados",
    price: "$15",
    sabor: "Fresa",
  },
  {
    id: 1,
    name: "Cupcake ",
    href: "#",
    imageSrc:
      "https://static.wixstatic.com/media/a4f621_a39ac77966b9412bae238e99bc8b42d8~mv2_d_3024_3024_s_4_2.png/v1/fill/w_500,h_500,al_c,q_90/file.jpg",
    imageAlt: "Sabores combinados",
    price: "$15",
    sabor: "Fresa",
  },
  {
    id: 1,
    name: "Cupcake ",
    href: "#",
    imageSrc:
      "https://s-media-cache-ak0.pinimg.com/originals/fc/75/5f/fc755f1244dd0f9f0174bb50fc519c89.png",
    imageAlt: "Sabores combinados",
    price: "$15",
    sabor: "Fresa",
  },
  {
    id: 1,
    name: "Cupcake ",
    href: "#",
    imageSrc:
      "https://image.shutterstock.com/shutterstock/photos/1189409857/display_1500/stock-photo-tasty-chocolate-cupcake-on-white-background-1189409857.jpg",
    imageAlt: "Sabores combinados",
    price: "$15",
    sabor: "Fresa",
  },
];

function ItemCard(props) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {props.tittle}
        </h2>

        <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group relative  drop-shadow-2xl">
              <div
                className="w-3/4  min-h-80 bg-gray-200  aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-3/4
                lg:aspect-none aspect-v"
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full  object-center object-scale-down lg:w-full lg:h-/4"
                />
              </div>
              <div className="mt-4 flex w-3/4 justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.sabor}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
