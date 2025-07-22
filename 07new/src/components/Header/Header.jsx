// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "GitHub", path: "/github" },
    { name: "User", path: "/user" },
  ];

  return (
    <header className="bg-gray-800 flex text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto flex flex-row justify-between items-center p-4">
        <Link to="/" className="text-xl ">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav
          className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 ${
            open ? "flex" : "hidden"
          } lg:flex`}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-lg transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-200 hover:text-orange-500"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex space-x-2">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-700"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
