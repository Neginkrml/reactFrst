import React, { useState, useEffect } from "react";

const Effect = () => {
  const [clicks, setClicks] = useState(0);
  const [name, setName] = useState(false);

  //!Hiçbir bağımlılık yok (dependency array YOK):  ---	Her render'da
  // useEffect(() => {
  //   console.log("Tıklanma gerçekleşti");
  //   document.title = `You clicked ${clicks} times`;
  // });

  //!Boş bağımlılık dizisi ([]) ile:  --- Sadece ilk render'da
  // useEffect(() => {
  //   console.log("Tıklanma gerçekleşti");
  //   document.title = `You clicked ${clicks} times`;
  // }, []);

  //!Belirli bağımlılıklara sahip ([clicks, name]):    --- clicks veya name değişince
  // useEffect(() => {
  //   document.title = `You clicked ${clicks} times`;
  // }, [clicks, name]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <div>
        <button onClick={() => setName(!name)}>Name</button>
      </div>
    </div>
  );
};

export default Effect;
