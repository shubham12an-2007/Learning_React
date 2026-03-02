import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [bgColor, setBgColor] = useState("olive");
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          width: "100vw",
          height: "100vh",
          transition: "0.3s",
        }}
      ></div>
      <h1>Background Changer </h1>

      <div className="button-container">
        <Button
          colourName="Red"
          color="red"
          setColorChange={setBgColor}
        ></Button>
        <Button
          colourName="Blue"
          color="blue"
          setColorChange={setBgColor}
        ></Button>
        <Button
          colourName="Green"
          color="green"
          setColorChange={setBgColor}
        ></Button>
        <Button
          colourName="Yellow"
          color="yellow"
          setColorChange={setBgColor}
        ></Button>
        <Button
          colourName="Black"
          color="black"
          setColorChange={setBgColor}
        ></Button>
        <Button
          colourName="Pink"
          color="pink"
          setColorChange={setBgColor}
        ></Button>
      </div>
    </>
  );
}

export default App;
