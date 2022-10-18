
describe("Login, Modifcar gateway, agrega y borra un dispositivo", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.contains("h2", "Login")
  });
  it("introducciendo datos a los inputs de email/password", () => {
    cy.get('input[type="email"]').type("1@1.co");
    cy.get('input[type="password"]').type("123456789");
  });
  it("validando que los inputs de email/password tengan los datos correctos", () => {
    cy.get('input[type="email"]').should("have.value","1@1.co");
    cy.get('input[type="password"]').should("have.value", "123456789");
  });
  it("limpia los inputs de email/password", () => {
    cy.get('input[type="password"]').clear();
    cy.get('input[type="email"]').clear();
  });
  it("hacer login con email/password bien", () => {
    cy.get('input[type="email"]').type("2@2.com");
    cy.get('input[type="password"]').type("123456");
    cy.get('input[type="email"]').should("have.value", "2@2.com");
    cy.get('input[type="password"]').should("have.value", "123456");
    cy.get("button").first().click();
    cy.contains("span", "Login correcto :D");
  });
  it("validando ruta /dashboard/config/gateway", () => {
    cy.visit("/dashboard/config/gateway");
    cy.contains("h2", "Gateway Configuracion");
  });
  it("validando que solo existen 2 inputs de texto", () => {
    cy.get("ul li input[type='text']").should("have.length", 2);
  });
  it("Modificando Nombre y ip del Gateway", () => {
    let name = "Preuba E2E",
      ip = "192.168.0.10";
    cy.get("ul li input[type='text']").first().type(name);
    cy.get("ul li input[type='text']").last().type(ip);
  });
  it("Validar Nombre y ip del Gateway", () => {
    let name = "Preuba E2E",
      ip = "192.168.0.10";
    cy.get("ul li input[type='text']")
      .should("have.length", 2)
      .first()
      .should("have.value", name);
    cy.get("ul li input[type='text']")
      .should("have.length", 2)
      .last()
      .should("have.value", ip);
  });

  it("guardando los datos", () => { 
    cy.get("#guardar").contains("Guardar").click();
    cy.contains("span", "Se a guardados los cambios exitosamente");
    cy.visit("/dashboard/config/dispositivos");
  })
  it("agregando dispositivo", () => { 
    cy.get("label").first().contains("Agregar Dispositivo").click();
    cy.get("#vendorinput").type("Router Prueba E2E");
    cy.get("button").contains("Guardar").click();
  })
  it("borrar dispositivo agregado", () => {     
    cy.get("td button").contains("Delete").click();
  })
  it("logout", () => {
    cy.contains("Sing out").click();
  });


});

describe("registra un nuevo usuario", () => { 
  
})