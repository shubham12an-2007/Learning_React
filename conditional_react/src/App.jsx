import { useState } from "react";
import "./App.css";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoogedIn={true} username="BroCode"></UserGreeting>
      <UserGreeting isLoogedIn={true}></UserGreeting>
    </>
  );
}

export default App;
