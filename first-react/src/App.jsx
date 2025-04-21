import Button from "./components/Test.jsx";
import Deneme from "./components/Ornek.jsx";
import Aladdin from "./components/Urun.jsx";
import Library from "./components/Map.jsx";

import Bildirim from "./CssComponents/New.jsx";
import Alert from "./CssComponents/Alert.jsx";

import Alert2 from "./CssComponents/Degisken.jsx";

export default function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "lightBlue",
          color: "white",
          borderRadius: 5,
          padding: 15,
          //!Burada CSS içine tanımlıyoruz iki tane kıvırcık prntz koymak gerek
        }}
      >
        DENEME SAYFASI
      </h1>

      <Button />
      <Deneme name="Yeşim" about="Ağzını yüzünü yerim" />
      <Aladdin messages="Benim iki tane kulağım bir taane burnum var" />
      <Library />
      <Bildirim />
      <Alert>BU SONRADAN EKLENMİŞ ALERT !</Alert>

      <Alert2 />
    </>
  );
}
