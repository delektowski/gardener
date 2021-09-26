// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("login", () => {
    cy.visit('https://www.zieloneimperium.pl/').get('#login_user').type(Cypress.env('login_user'));
    cy.get('#login_pass').type(Cypress.env('login_pass'));
    cy.get('#submitlogin').click({force: true}).wait(1000);
});


Cypress.Commands.add('plantingOrWatering', () => {
    const checkIsNoObstacle = (str) => {
        const regex = /baumstumpf|steine|maulwurf|unkraut|mole|gegossen|palme/ig;
        return !regex.test(str);
    };

    for (let j = 1; j <= 204; j++) {
        cy.get(`#gardenTile${j}`).children().eq(0).invoke('attr', 'style').then(str => {
            if (checkIsNoObstacle(str)) {
                cy.get(`#gardenTile${j}`).click({force: true}).wait(200);
            }
        })
    }
});
