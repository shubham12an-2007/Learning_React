import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);

    if (counter > 20) {
      setCounter((counter = 20));
    }
    // console.log(counter);
  };

  const removeValue = () => {
    setCounter((counter = counter - 1));

    if (counter < 0) {
      setCounter((counter = 0));
    }
    // console.log(counter);
  };

  // make a logic so that counter  never goes in negative

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>

      <p>Footer : {counter} </p>
    </>
  );
}

export default App;
