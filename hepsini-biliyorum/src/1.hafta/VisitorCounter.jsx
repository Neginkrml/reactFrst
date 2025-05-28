import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Sayfa  ${counter} kez render edildi`);
  }, [counter]);

  const handleArttır = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      null;
    }
  };
  const handleAzalt = () => {
    setCounter(counter - 1); // set değişkenini parantez içine alarak  yazmadın
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
