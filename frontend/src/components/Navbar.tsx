import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-2 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Elexy</h1>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </div>
          <div className="relative ml-4">
            <input
              type="text"
              className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none"
              placeholder="Search..."
            />
            <button className="absolute right-0 top-0 mt-2 mr-4">
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 111.41-1.41l4.58 4.58-1.41 1.41-4.58-4.58zM8 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </button>
          </div>
          <button
            className="md:hidden ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-2">
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="block px-4 py-2 hover:bg-gray-700">
                Products
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
