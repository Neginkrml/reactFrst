import Button from "./components/Test.jsx";
import Deneme from "./components/Ornek.jsx";
import Aladdin from "./components/Urun.jsx";
import Library from "./components/Map.jsx";

export default function App() {
  return (
    <>
      <h1>DENEME SAYFASI</h1>

      <Button />
      <Deneme name="Yeşim" about="Ağzını yüzünü yerim" />
      <Aladdin messages="Benim iki tane kulağım bir taane burnum var" />
      <Library />
    </>
  );
}
