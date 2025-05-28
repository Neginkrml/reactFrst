import React, { useState } from "react";

const KayitFormu = () => {
  const [name, setName] = useState(" ");

  const handleSubmit = () => {
    console.log("Kayıt alındı: " + name);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} //onchange fonksiyonunu bin kez yanlış yazdın aferin
      />
      <button disabled={name === " "} onClick={handleSubmit}>
        Kayıt
      </button>
    </>
  );
};

export default KayitFormu;
