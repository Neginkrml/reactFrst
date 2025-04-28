import React, { useState } from "react";

const OnClickComp = ({ message, children }) => {
  const [number, setNumber] = useState(0);
  const [deger, setDeger] = useState("Baslangic");

  const [isLoading, setIsLoading] = useState(false);
  console.log(deger);

  console.log(number);
  const handleClick = () => {
    setNumber(number + 1);
    setDeger("Bitis");
    setIsLoading(!isLoading);
  };
  return (
    <div style={{ fontSize: "25px" }}>
      <button onClick={() => console.log(message)}>{children}</button>

      <button onClick={handleClick}>{number}</button>
      {isLoading ? <p>deger true oldu</p> : <p> bu false bir deger </p>}
    </div>
  );
};

export default OnClickComp;
