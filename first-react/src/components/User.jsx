import React from "react";
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Ozan",
    age: 28,
    city: "İstanbul",
  });
  console.log(user);

  const handleClick = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  return (
    <div>
      <p>
        Ad: {user.name} <br />
        Yaş:{user.age} <br />
        Şehir:{user.city} <br />
      </p>
      <button onClick={handleClick}> Yaş Guncelle </button>
    </div>
  );
};

export default User;
