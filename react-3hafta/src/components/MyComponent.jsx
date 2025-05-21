import React, { useId } from "react";

// const MyComponent = () => {
//   // useId Amacı: Form elemanları için benzersiz (unique) id’ler oluşturmak.
//   const id = useId();

//   return (
//     <>
//       <div>
//         <label htmlFor={id}>İsim</label>
//         <input id={id} type="text" />
//       </div>
//     </>
//   );
// };

const MyComponent = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <>
      <form>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} />

        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} />

        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default MyComponent;
