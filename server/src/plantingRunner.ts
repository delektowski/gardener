import * as cypress from "cypress";

function runHarvesting(
  login: string,
  pass: string,
  plant: string,
  harvestTime: number
) {
  console.log("STARTED HARVESTING:", login);
  cypress
    .run({
      // the path is relative to the current working directory
      spec: "cypress/integration/harvest.spec.js",
      env: {
        login_user: login,
        login_pass: pass,
      },
    })
    .then((results) => {
      console.log("HARVESTED:", login);
      plantingRunner(login, pass, plant, harvestTime)
    })
    .catch((err) => {
      console.error(err);
    });
}

function plantingRunner(
  login: string,
  pass: string,
  plant: string,
  harvestTime: number
) {
  function runPlanting(
    login: string,
    pass: string,
    plant: string,
    harvestTime: number
  ) {
    console.log("STARTED:", login);
    cypress
      .run({
        // the path is relative to the current working directory
        spec: "cypress/integration/plant.spec.js",
        env: {
          login_user: login,
          login_pass: pass,
          plant: plant,
          harvestTime: harvestTime,
        },
      })
      .then((results) => {
        console.log("PLANTED:", login);
        setTimeout(
          () => runHarvesting(login, pass, plant, harvestTime),
          harvestTime
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  runPlanting(login, pass, plant, harvestTime);
}

export default plantingRunner;
