import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Navbar(props) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <button>
                    <Link to="/">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src={props.miniLogo}
                        alt="minilogo"
                      />
                    </Link>
                  </button>
                  <button>
                    <Link to="/">
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src={props.Logo}
                        alt="Logo"
                      />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                {/* Current: "border-pinky text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <div className="border-transparent hover:border-gray-300 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Link to="/"> {props.first}</Link>
                </div>
                <div className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Link to={`/category/${props.second}`}> {props.second}</Link>
                </div>
                <div className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Link to={`/category/${props.third}`}> {props.third}</Link>
                </div>
                <div className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Link to={`/category/${props.fourth}`}> {props.fourth}</Link>
                </div>
              </div>

              <div
                className=" flex items-center justify-end
               px-2 space-x-4 lg:ml-6 lg:justify-end"
              >
                <SearchForm />
                <CartWidget />
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pinky">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/">
                {" "}
                <Disclosure.Button
                  as="div"
                  className="bg-indigo-50 border-pinky text-pinky block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {props.first}
                </Disclosure.Button>
              </Link>

              <Link to={`/category/${props.second}`}>
                <Disclosure.Button
                  as="div"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {props.second}
                </Disclosure.Button>
              </Link>

              <Link to={`/category/${props.third}`}>
                <Disclosure.Button
                  as="div"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {props.third}
                </Disclosure.Button>
              </Link>
              <Link to={`/category/${props.fourth}`}>
                {" "}
                <Disclosure.Button
                  as="div"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {props.fourth}
                </Disclosure.Button>
              </Link>
            </div>
            {/* <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={props.miniLogo}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Misael
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    lutimi@gmail.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <CartWidget />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
