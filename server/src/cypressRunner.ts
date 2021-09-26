import * as cypress from "cypress";

const cypressRunner = (
  login: string,
  pass: string,
  plant: string,
  timer?: number
) => {
  function runCypress(login: string, pass: string, plant: string) {
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
        console.log(results);

      })
      .catch((err) => {
        console.error(err);
      });
  }

  runCypress(login, pass, plant);
};

export default cypressRunner;
