import Elma from "./CssComponents/Degisken";
import Alert from "./CssComponents/Alert";
import Alertt from "./CssComponents/New.jsx";

const CssApp = () => {
  return (
    <>
      <Elma />

      <Alert error="blue"> Hata mesajı</Alert>

      {/* <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert> */}

      <Alertt />
    </>
  );
};

export default CssApp;
