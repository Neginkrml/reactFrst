import "./App.css";
import BirthdaySurprise from "./components/BirdihtaySuprise";
import CheckBox from "./components/CheckBox";
import LoginForm from "./components/LoginForm";
import MyComponent from "./components/MyComponent";
import SearchBar from "./components/SearchBar";

import Select from "./components/Select";

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
      {/* <CheckBox /> */}
      <BirthdaySurprise />
    </>
  );
}

export default App;
