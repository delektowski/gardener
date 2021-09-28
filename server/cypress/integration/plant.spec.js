describe("Planting", () => {
  it("Planting something", () => {
    // Login for planting
    cy.login();
    cy.get("#anpflanzen").click({ force: true }).wait(500);
    cy.get(Cypress.env("plant"))
      .eq(0)
      .click({ force: true })
      .wait(500)
      .plantingOrWatering()
      .get("#giessen")
      .click({ force: true })
      .wait(500)
      .plantingOrWatering();
    //  Logout
    cy.logout();
  });
});
