import React, { useState } from "react";

const CheckBox = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (e) => {
    setHasAccepted(e.target.checked);
  };
  return (
    <>
      <div>
        <label>
          <input
            type="checkbpx"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>
          Proceed
        </button>
      </div>
    </>
  );
};
export default CheckBox;
