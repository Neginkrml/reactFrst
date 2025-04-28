import React, { useState } from "react";

const Student = () => {
  const [ogrenciler, setOgrenciler] = useState([
    { id: 1, ad: "Ali", not: 50 },
    { id: 2, ad: "Ayşe", not: 60 },
    { id: 3, ad: "Ozan", not: 95 },
    { id: 4, ad: "Nurgül", not: 85 },
  ]);

  const notArttırma = () => {
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
      <h2>Ogrenci Listesi</h2>
      <ul>
        {ogrenciler.map((ogrenci) => (
          <li key={ogrenci.id}>
            {ogrenci.ad}: {ogrenci.not}
          </li>
        ))}
      </ul>
      <button onClick={notArttırma}>Tüm notlara 10 puan ekle</button>
    </div>
  );
};

export default Student;
