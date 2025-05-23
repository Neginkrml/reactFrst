import "./App.css";

import LoginForm from "./components/LoginForm";
import MyComponent from "./components/MyComponent";
import SearchBar from "./components/SearchBar";

import Select from "./components/Select";
import NewLoginForm from "./components/NewLoginForm";
import FirstFormik from "./components/FirstFormik";
import Formik2 from "./components/Formik2";
import FormikSelect from "./components/FormikSelect";
import YupForm from "./components/Yup";

function App() {
  /*const handleLogin = (userData) => {
    console.log(userData);
  };*/

  return (
    <>
      {/* <h1>Please login to your account!</h1>
      <LoginForm handleLogin={handleLogin} /> */}

      {/* <MyComponent /> */}
      {/* <SearchBar /> */}
      {/* <Select /> */}
      {/* <NewLoginForm /> */}

      {/* <FirstFormik /> */}
      {/* <Formik2 /> */}
      {/* <FormikSelect /> */}

      <YupForm />
    </>
  );
}

export default App;
