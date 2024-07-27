import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              [Your NGO Name] is dedicated to empowering children through
              education and sports.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-students" className="hover:text-blue-300">
                  Our Students
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">
              123 NGO Street, City, Country
            </p>
            <p className="text-sm text-gray-300">
              Email: info@yourngoemail.org
            </p>
            <p className="text-sm text-gray-300">Phone: +1 234 567 8900</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-gray-800 w-full"
              />
              <button type="submit" className="bg-blue-500 text-white p-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2023 [Your NGO Name]. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
