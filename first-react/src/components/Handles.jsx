import { useState } from "react";

const Handles = () => {
  const [clicks, setClicks] = useState(0); // Tıklama sayısı
  const [isOpen, setIsOPen] = useState(false); // Paragraf görünürlüğü

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const handleToggle = () => {
    setIsOPen(!isOpen); // true ise false yapar, false is true yapar
  };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <br />
      <br />
      <button onClick={handleToggle}> {isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p> Now you can see me!</p>}
    </>
  );
};

export default Handles;
