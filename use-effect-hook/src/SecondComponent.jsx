import React, { useEffect, useState } from "react";

const SecondComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up before next re render or when the componet unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed ");
    };
  }, []);

  useEffect(() => {
    document.title = `Size : ${width} x Heigth : ${height}`;
  }, [width, height]);

  return (
    <div>
      <p>Width : {width}px</p>
      <p>Height: {height}px </p>

      <button onClick={handleResize}>Resize Button </button>
    </div>
  );
};

export default SecondComponent;
