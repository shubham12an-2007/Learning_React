import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";

function App() {
  return (
    <>
      <h1>Healthy Food Items</h1>
      <Header></Header>
      <br />
      <Food></Food>
      <br />
      <Footer></Footer>
    </>
  );
}

export default App;
