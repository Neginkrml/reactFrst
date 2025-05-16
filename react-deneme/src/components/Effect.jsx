import React, { useState, useEffect } from "react";

const Effect = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });
  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks}times
      </button>
    </div>
  );
};

export default Effect;
