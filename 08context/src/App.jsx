import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React Course for Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
