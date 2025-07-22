import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  //let counter = 15;
  const addvalue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removevalue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course with {counter}</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}> add value</button>{" "}
      <button onClick={removevalue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
