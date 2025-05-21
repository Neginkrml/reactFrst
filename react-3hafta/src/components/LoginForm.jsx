import React from "react";

const LoginForm = ({ handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    const form = e.target;
    const { login, password } = form.elements;

    // console.log(login);
    // console.log(password);
    // console.log(login.value);
    // console.log(password.value);

    handleLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  console.log(handleLogin);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default LoginForm;
