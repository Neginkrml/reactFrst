import React, { useState } from "react";

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleArttır = () => {
    setCounter(counter + 1); // set değişkenini parantez içine alarak  yazmadın
  };
  const handleAzalt = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={handleArttır}>Kullanıcı Sayısını Arttır</button>
      <button onClick={handleAzalt}>Kullanıcı Sayısını Azalt</button>
      <p>Mevcut Ziyaretçi Sayısı: {counter}</p>
      {counter === 5 ? `Tebrikler kullanıcı sayısı ${counter} ulaştı` : " "}
    </>
  );
};

export default VisitorCounter;
