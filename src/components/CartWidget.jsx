// <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
// </svg>

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
// // import { ShoppingCartIcon } from '@heroicons/react/solid'
// import {
//   ChartBarIcon,
//   CursorClickIcon,
//   DocumentReportIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   ViewGridIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/outline";

const solutions = [
  {
    name: "Arroz verd",
    description: "Comida asiatica",
    href: "#",
    img: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    price: "$12",
  },
  {
    name: "Ceviche",
    description: "Comida de Peru",
    href: "#",
    img: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    price: "$12",
  },
  {
    name: "Lomo saltado",
    description: "Arroz carne  papas fritas y mucho mas",
    href: "#",
    img: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    price: "$12",
  },
  {
    name: "Makis",
    description: " Comida asiatica fusionada con Peruana ",
    href: "#",
    img: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    price: "$12",
  },
  {
    name: "Automations",
    description: "Prueba de parrillast",
    href: "#",
    img: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    price: "$12",
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions",
    href: "#",
    img: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    price: "$12",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CartWidget() {
  return (
    <Popover className="">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            )}
          >
            {/* <span>Carrito</span> */}
            <div slot="icon" className="relative">
              <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                6
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            {/* <ShoppingCartIcon
              className={classNames(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-8 w-8 group-hover:text-gray-500 transition ease-in-out duration-150'
              )}
              aria-hidden="true"
            /> */}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 "
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="text-3xl font-medium p-4 text-black">
                  Carrito de compras
                </div>
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className=" flex items-center justify-start  h-10 w-10 rounded-md  text-white sm:h-12 sm:w-12">
                        <img src={item.img} alt="" />
                        {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                      </div>
                      <div className="ml-4 flex w-2/4 flex-col justify-start items-start ">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>

                      <p className="mt-1 text-xl  text-gray-500">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-gray-50 sm:p-8"></div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
export default CartWidget;
