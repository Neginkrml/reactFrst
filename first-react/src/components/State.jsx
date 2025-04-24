import { useState } from "react";

const Lale = () => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return <button onClick={handleClick}>Current: {clicks}</button>;
};
export default Lale;
