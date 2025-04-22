const Elma = () => {
  const pCss = {
    backgroundColor: "pink",
    color: "white",
    fontSize: 40,
    height: "40px",
    textAlign: "center",
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: "lightBlue",
          color: "white",
          borderRadius: 5,
          padding: 15,
        }}
      >
        Bu inline css öğreten başlıktır
      </h1>

      <p style={pCss}> Bu yukarıda const ile tanımlanan Css ile süslenmiştir</p>
    </>
  );
};
export default Elma;
