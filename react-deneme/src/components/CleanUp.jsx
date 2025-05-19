import React, { useState, useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Çalışıyor");
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Temizlik yapıldı ");
    };
  }, []);
  return <div>Ben bir zamanlayıcıyım</div>;
};

const Zamanlayıcı = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Zamanlayıcıyı Kapat" : "Zamanlaytıcıyı Aç"}
      </button>
      {showTimer && <Timer />}
    </>
  );
};

export default Zamanlayıcı;
