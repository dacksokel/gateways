const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};


const numero = getRandomInt(200);
const email = `${numero}@${numero}.com`;
const password = "123456789";

describe("registra un nuevo usuario", () => {
  it("validando ruta de registro", () => {
    cy.visit("/registro");
    cy.get("h2").contains("Register");
  });
  it("Ingresando datos para registrar correo/password", () => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
  });

  it("Validando datos  ingresados para registrar correo/password", () => {
    cy.get('input[type="email"]').should("have.value", email);
    cy.get('input[type="password"]').should("have.value", password);
  });

  it("Creando Registro de usuario", () => {
    cy.get("button").contains("create").click();
    cy.get("span").contains("Registro Existoso 🎉!!");
   
  });
  it("logout", () => {
     cy.wait(5000);
    cy.contains("Sing out").click();
  });
});

describe("Login, Modifcar gateway, agrega y borra un dispositivo", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.contains("h2", "Login");
  });
  it("introducciendo datos a los inputs de email/password", () => {
    cy.get('input[type="email"]').type("1@1.co");
    cy.get('input[type="password"]').type("123456789");
  });
  it("validando que los inputs de email/password tengan los datos correctos", () => {
    cy.get('input[type="email"]').should("have.value", "1@1.co");
    cy.get('input[type="password"]').should("have.value", "123456789");
  });
  it("limpia los inputs de email/password", () => {
    cy.get('input[type="password"]').clear();
    cy.get('input[type="email"]').clear();
  });
  it("hacer login con email/password bien", () => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('input[type="email"]').should("have.value", email);
    cy.get('input[type="password"]').should("have.value", password);
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
  });
  it("agregando dispositivo", () => {
    cy.get("label").first().contains("Agregar Dispositivo").click();
    cy.get("#vendorinput").type("Router Prueba E2E");
    cy.get("button").contains("Guardar").click();
  });
  it("borrar dispositivo agregado", () => {
    cy.get("td button").contains("Delete").click();
  });
  it("logout", () => {
     cy.wait(5000);
    cy.contains("Sing out").click();
  });
});

describe("Restaurando contrasena", () => {
  it("validando ruta de registro", () => {
    cy.visit("/resetPassword");
    cy.get("h2").contains("Recovery Password");
  });
  it("Ingresando datos para registrar correo/password", () => {
    cy.get('input[type="email"]').type(email);
    cy.get("form button").contains("Validar").click();
    cy.get("span").contains("El Correo Ingresado es valido");
  });

  it("ingresando nueva password", () => {
    cy.get('input[type="password"]').type("987654");
    cy.get('input[type="password"]').should("have.value", "987654");
  });

  it("Validando Cambio de password", () => {
    cy.get(".modal-action button").contains("Guardar").click();
    cy.get("span").contains(
      `Password Cambiado Exitosamente!! al correo ${email}`
    );
  });
});
