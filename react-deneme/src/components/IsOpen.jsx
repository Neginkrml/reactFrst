import React, { useState } from "react";

const NewComp = () => {
  const [isOpen, setIsOpen] = useState(false); // Başlangıçta false, yani kapalı
  const [miktar, setMiktar] = useState(0);
  const [urunAdi, setUrunAdi] = useState("");

  const handleClick = () => {
    setMiktar(miktar + 1);
    setUrunAdi("Nar");
  };
  const handleClick1 = () => {
    setIsOpen(!isOpen); //isOpen değişkenini tersine çevirir
  };

  return (
    <>
      <button onClick={handleClick}>Tıkla</button>
      {/* isOpen true ise → butonda "Kapat" yazısı olur veya aksi */}
      <button onClick={handleClick1}>{isOpen ? "Kapat" : "Aç"}</button>
      {/* Şartlı Gösterim: */}
      {isOpen ? ( // isOpen true ise <div> içinde ürün adı ve miktarı yazdırılır
        <div>
          <p>Ürün adı: {urunAdi}</p>
          <p>Miktarı: {miktar}</p>
        </div>
      ) : (
        //isOpen false ise, hiçbir şey görünmez.

        " "
      )}
    </>
  );
};

export default NewComp;
