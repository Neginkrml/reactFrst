import React, { useState } from "react";

const Student = () => {
  const [ogrenciler, setOgrenciler] = useState([
    { id: 1, isim: "Gökalp", not: 85 },
    { id: 2, isim: "Yasin", not: 75 },
    { id: 3, isim: "Özgür", not: 68 },
    { id: 4, isim: "Batuhan", not: 95 },
  ]);

  const notArttirma = () => {
    const notlar = ogrenciler.map((item) => {
      return {
        ...item,
        not: item.not + 10 > 100 ? 100 : item.not + 10,
      };
    });
    setOgrenciler(notlar);
  };

  return (
    <div>
      <h2> Ogrenci Listesi</h2>
      <ul>
        {ogrenciler.map((ogrenci) => (
          <li key={ogrenci.id}>
            {ogrenci.isim}: {ogrenci.not}
          </li>
        ))}
      </ul>

      <button onClick={notArttirma}> Tüm notlara 10 puan ekle </button>
    </div>
  );
};

export default Student;
