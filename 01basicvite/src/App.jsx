import React, { useState } from "react";
import Youtube from "./Youtube";

function App() {
  const username = "priyansh";
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite React App {2 + 2}</h1>
      <h1>Welcome, {username}</h1>
      <Youtube />
    </>
  );
}

export default App;
