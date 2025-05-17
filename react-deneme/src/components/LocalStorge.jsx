import React, { useState, useEffect } from "react";

const LocalStorage = () => {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      {/* <p>{window.localStorage.getItem("saved-clicks")}</p> */}
      <p>{clicks}</p>
      <button onClick={() => setClicks(0)}> Reset</button>
    </div>
  );
};

export default LocalStorage;
