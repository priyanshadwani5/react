import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl bg-gradient-to-r from-slate-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-between px-6 py-12 gap-6">
        {/* Left: Catchy Heading and Button */}
        <div className="flex-1 text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-white leading-snug">
            Boost Your Productivity
            <br />
            with <span className="text-orange-400">Smart Task Manager</span>
          </h1>
          <p className="text-gray-300 max-w-md mx-auto">
            Organize projects, track your work, and collaborate efficiently with
            your team in one seamless platform.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-orange-600 rounded-full hover:bg-orange-500 transition"
          >
            <svg
              fill="white"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Get Started Now
          </Link>
        </div>

        {/* First Image */}
        <div className="flex-1 flex justify-center">
          <img
            className="w-52 object-contain drop-shadow-xl"
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Productivity"
          />
        </div>

        {/* Second Image */}
        <div className="flex-1 flex justify-center">
          <img
            className="w-52 object-contain drop-shadow-xl"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Team Work"
          />
        </div>

        {/* Right: Heading or Quote */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Empower Your Team with Clarity & Control
          </h2>
        </div>
      </div>
    </div>
  );
}
