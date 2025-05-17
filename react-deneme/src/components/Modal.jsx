import React, { useState, useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(`Interval -${Date.now()}`);
    }, 2000);
  }, []);

  return <div>Modal</div>;
};

const Modalprnt = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};

export default Modalprnt;
