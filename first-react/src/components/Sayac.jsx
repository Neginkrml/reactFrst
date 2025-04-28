import React, { useState } from "react";

const Sayac = () => {
  const [number, setNumber] = useState(0);
  const [gece, setGece] = useState(false);
  const handleArttır = () => {
    setNumber(number + 1);
  };
  const stil = {
    backgrounColor: gece ? "black" : "yellow",
    color: "white",
  };

  return (
    <div style={stil}>
      <p>{number}</p>
      <button onClick={handleArttır}> Arttır</button>
      <button onClick={() => setNumber(number - 1)}>Azalt</button>
      <button onClick={() => setNumber(0)}>Sifirla</button>
      <button onClick={() => setNumber(number + 5)}>5 Arttır</button>
      <button onClick={() => setGece(!gece)}> Gece/ Gunduz</button>
    </div>
  );
};

export default Sayac;
