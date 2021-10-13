import { useState } from "react";
import styles from "./gardnerForm.module.css";

const GardnerForm = () => {
  const [login, setLogin] = useState("sympatyczna");
  const [pass, setPass] = useState("Bombowiec");
  const [plant, setPlant] = useState("#regal_2");
  const [harvestTime, setHarvestTime] = useState(700000);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch(
      "http://localhost:3333/startGardening",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, pass, plant, harvestTime }),
      }
    );
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

  function handleHarvestTime(e) {
    setHarvestTime(e.target.value);
  }

  return (
    <section className={styles.container}>
      <label htmlFor="login">Login:</label>
      <input value={login} type="text" id="login" name="login" onChange={handleLogin} />
      <label htmlFor="pass">Password:</label>
      <input value={pass} type="text" id="pass" name="pass" onChange={handlePass} />
      <label htmlFor="plant">Plant:</label>
      <input value={plant} type="text" id="plant" name="plant" onChange={handlePlant} />
      <label htmlFor="harvestTime">Harvest Time:</label>
      <input
        value={harvestTime} type="number"
        id="harvestTime"
        name="harvestTime"
        onChange={handleHarvestTime}
      />
      <button
        className={styles.button}
        type="button"
        onClick={handleFormSubmit}
      >
        Zapisz
      </button>
    </section>
  );
};

export default GardnerForm;
