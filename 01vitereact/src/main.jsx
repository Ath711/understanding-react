import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1> custom App </h1>
    </div>
  );
}
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUsr = "chai";

const reactElement2 = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to vist google ",
  anotherUsr
);

createRoot(document.getElementById("root")).render(
  // <App />
  reactElement2
);

//every react uses bundler
// div is parsed and converted in bject type
