import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={LOGO_URL} alt="Logo" />
          </div>
          <div className="hidden md:flex items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/our-students">Our Students</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink
              to="/donate"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4"
            >
              Donate
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* Add hamburger icon */}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/our-students">Our Students</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink
            to="/donate"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md block mx-4 my-2"
          >
            Donate
          </NavLink>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${className}`}
  >
    {children}
  </Link>
);

export default Header;
