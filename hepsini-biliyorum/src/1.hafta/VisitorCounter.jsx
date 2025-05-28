import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Sayfa render ediliyor");
  }, [counter]);

  const handleArttır = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      null;
    }
  };
  const handleAzalt = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={handleArttır}>Ziyaretçi sayısını arttır</button>
      <button onClick={handleAzalt}>Ziyaretçi sayısını azalt</button>
      <p>Mevcut ziyaretçi sayısı: {counter}</p>
    </>
  );
};

export default VisitorCounter;
