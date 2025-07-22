import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // ✅ Only import App here
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
function MyApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  );
}
const Anotherelement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);
const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visirt google",
  username
);

ReactDOM.createRoot(document.getElementById("root")).render(areactElement);
