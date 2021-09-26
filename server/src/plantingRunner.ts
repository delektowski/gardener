import * as cypress from "cypress";

const plantingRunner = (
  login: string,
  pass: string,
  plant: string,
  timer?: number
) => {
  function runPlanting(login: string, pass: string, plant: string) {
    console.log("STARTED:", login);
    cypress
      .run({
        // the path is relative to the current working directory
        spec: "cypress/integration/plant.spec.js",
        env: {
          login_user: login,
          login_pass: pass,
          plant: plant,
        },
      })
      .then((results) => {
        console.log("PLANTED:", login);
        console.log(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  runPlanting(login, pass, plant);
};

export default plantingRunner;
