import React, { useState } from "react";

//! 1. Başlangıçta yanlış yapı (kontrolsüz):
// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <>
//       <div>
//         <input type="text">
//           <p>{inputValue}</p>
//         </input>
//       </div>
//     </>
//   );
// };

//! 2. Doğru yapı (kontrollü):
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>
      <p>{inputValue}</p>
    </>
  );
};

export default SearchBar;
