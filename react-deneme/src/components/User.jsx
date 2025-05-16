import React, { useState } from "react";
const User = () => {
  const [user, setUser] = useState({
    name: "Ozan",
    age: 28,
    city: "İstanbul",
  });

  const handleClick = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  return (
    <>
      <p> İsim:{user.name}</p>
      <p>Yaş:{user.age}</p>
      <p>Şehir:{user.city}</p>
      <button onClick={handleClick}>Yaş Güncelle</button>
    </>
  );
};

export default User;
