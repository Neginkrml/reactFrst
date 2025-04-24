const Button = () => {
  const handleClick = () => {
    alert("I'm a button");
  };

  return (
    <>
      <button onClick={handleClick}>Bana Tıkla !</button>
    </>
  );
};

// const Button = () => {
//   return <button onClick={() => alert("I'm a button!")}> Click me!</button>;
// };

export default Button;
