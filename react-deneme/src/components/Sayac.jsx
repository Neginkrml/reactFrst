import React, { useState } from "react";

const Sayac = () => {
  const [number, setNUmber] = useState(0);
  const [gece, setGece] = useState(false);
  // const [date, setDate] = useState(() => {
  //   const today = new Date();
  //   today.setDate(today.getDate() + 7);
  //   return today;
  // });

  const handleArttır = () => {
    setNUmber(number + 1);
  };

  const stil = {
    backgroundColor: gece ? "black" : "lightBlue",
    color: gece ? "white" : "black",
  };

  return (
    <div style={stil}>
      <p>{number}</p>
      <button onClick={handleArttır}>Arttır</button>
      <button onClick={() => setNUmber(number - 1)}>Azalt</button>
      <button onClick={() => setNUmber(0)}>Sıfırla</button>
      <button onClick={() => setGece(!gece)}>
        {gece ? "Gündüz yap" : "Gece yap"}
      </button>
    </div>
  );
};
export default Sayac;
