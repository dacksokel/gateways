describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
      cy.contains("h2", "Login");      
  });
    it("rellenando los inputs de correo y password", () => { 
        cy.get('input[type="email"]').type('1@1.co');
        cy.get('input[type="password"]').type("123456789");
    })
    it("recibiendo error al hacer login", () => { 
        cy.get("button").first().click();
        cy.contains("span", "Password incorrecto!!");
    })
});
