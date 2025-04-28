import React, { useState } from "react";

const NewComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [miktar, setMiktar] = useState(0);
  const [urunAdi, setUrunAdi] = useState("Elma");

  const handleClick = () => {
    setMiktar(miktar + 1);
    setUrunAdi("Armut");
  };

  const handleClick1 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Tıkla</button>
      <button onClick={handleClick1}>{isOpen ? "Kapat" : "Aç"}</button>

      {isOpen ? (
        <div>
          <p>Ürün adı : {urunAdi}</p>
          <p> Miktarı :{miktar}</p>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default NewComp;
