import Button from "./components/Test.jsx";
import Urun from "./components/Urun.jsx"; //! burada import etmeyi unuttun
import Kosullu from "./components/Ornek.jsx";

const Product = () => {
  const price = 786;
  return (
    <div>
      <h2>Cookies</h2>
      <p>Price: {price} credits</p>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <h1>Title</h1>
      </div>
      <Product />
      <Button />
      <div>
        <Urun name="telefon" price={555} />
        <Urun name="Kulaklık" price={888} />
      </div>
      {/* Eklenenleri daha dinamik yapar */}
      <Kosullu />
    </>
  );
}
export default App;
