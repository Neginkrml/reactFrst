const Eventt = () => {
  const handleClick = (evt) => {
    console.log(evt);
  };
  return (
    <>
      <button onClick={handleClick}>First button</button>
      <br />
      <br />
      <button onClick={(evt) => console.log(evt)}> Second Buttonn </button>
    </>
  );
};
export default Eventt;
