import React, { useState, useId } from "react";

const Select = () => {
  const selectId = useId();
  const [lang, setLang] = useState("uk"); //benzersiz (unique) id'ler üretmek için kullanılır.

  return (
    <>
      <div>
        <label>Choose language</label>
        <div>
          <select
            id={selectId}
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="uk">Ukrainian</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
