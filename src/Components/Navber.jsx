// import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200">
            Book shop
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200 transition duration-200">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-200 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 transition duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
