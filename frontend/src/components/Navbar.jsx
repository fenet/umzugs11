import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // place your logo in frontend/src/assets/

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Umzugself" className="h-10 w-auto" />
        <span className="text-xl font-bold text-[#93dc5c]">umzugsELF</span>
      </Link>

      {/* Nav Links */}
      <div className="space-x-6">
        <a href="https://cal.com/" className="text-gray-700 hover:text-[#93dc5c]">
          Book
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

