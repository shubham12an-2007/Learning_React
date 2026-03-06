import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <Card
        name="BroCode"
        hobby="I am brocode love to play tennis "
        age={30}
        isStudent={false}
      ></Card>
      <Card
        name="Code with Harry"
        hobby="I am a student and play video games"
        age={24}
        isStudent={true}
      ></Card>
      <Card
        hobby="I am a teacher and play cricket"
        age={27}
        isStudent={true}
      ></Card>
      <Card
        name="Chai aur Code"
        hobby="I am a father  and play football"
        age={18}
        isStudent={true}
      ></Card>
    </>
  );
}

export default App;
