// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-sm text-center p-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
