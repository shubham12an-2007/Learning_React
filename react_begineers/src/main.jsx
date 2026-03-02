import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react"; // Add 'React' here
import "./index.css";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App</h1>
    </>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google ",
// };

const anotherUser = "chai aur code ";

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);

const ReactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit google ",
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyApp />
    {anotherElement}
    {ReactElement}
    {anotherUser}
  </StrictMode>,
);
