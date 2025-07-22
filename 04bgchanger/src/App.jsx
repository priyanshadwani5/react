import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl bottom-12 left-0 right-0 mx-auto w-fit">
        <button
          onClick={() => setColor("red")}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >
          green
        </button>
      </div>
    </div>
  );
}

export default App;
