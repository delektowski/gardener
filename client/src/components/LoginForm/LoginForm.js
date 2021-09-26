import { useState } from "react";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [plant, setPlant] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch("http://localhost:3333/createText", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, pass, plant }),
    });
    const content = await rawResponse.json();

    console.log(content);
  };

  function handleLogin(e) {
    setLogin(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function handlePlant(e) {
    setPlant(e.target.value);
  }

  return (
    <>
      <label htmlFor="login">Login:</label>
      <input type="text" id="login" name="login" onChange={handleLogin} />
      <label htmlFor="pass">Password:</label>
      <input type="text" id="pass" name="pass" onChange={handlePass} />
      <label htmlFor="plant">Plant:</label>
      <input type="text" id="plant" name="plant" onChange={handlePlant} />
      <button type="button" onClick={handleFormSubmit}>
        Zapisz
      </button>
    </>
  );
};

export default LoginForm;
