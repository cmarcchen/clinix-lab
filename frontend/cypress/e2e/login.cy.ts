describe("empty spec", () => {
  it("should deny access", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Access Denied, Please Login or Register").should("exist");
  });
  it("should login", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[href="/login"] > .MuiListItem-root > .MuiButtonBase-root').click();
    cy.get("#email").type("marc.chen@sanofi.com");
    cy.get("#password").type("password");

    cy.get(".MuiButton-root").click();
    cy.contains("marc.chen@sanofi.com").should("exist");
  });
});
