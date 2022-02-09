/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/login");
  });

  it("Has the correct UI", () => {
    cy.findByText(/Sign In to Sailspad/i).should("exist");

    cy.findByText(/create an account/i)
      .should("exist")
      .should("be.visible");

    cy.findByLabelText(/email/i).should("not.be.null");

    cy.findByLabelText(/password/i).should("not.be.null");

    cy.findByRole("link", { name: /forgot password/i }).should("not.be.null");

    cy.findByRole("switch", { name: /stay signed in/i }).should("not.be.null");

    cy.findByRole("button", { name: /continue/i })
      .should("exist")
      .should("be.visible");

    cy.findByRole("button", { name: /sign in with google/i })
      .should("exist")
      .should("be.visible");
    cy.findByRole("button", { name: /sign in with facebook/i })
      .should("exist")
      .should("be.visible");
    cy.findByRole("button", { name: /sign in with linkedin/i })
      .should("exist")
      .should("be.visible");
  });

  it("Email and Password is required", () => {
    cy.findByRole("button", { name: /continue/i }).click();

    cy.findByText(/email is required/i).should("not.be.null");

    cy.findByText(/password is required/i).should("not.be.null");

    cy.get('input[name="email"]')
      .should("exist")
      .should("be.empty")
      .type("test@cypress.com")
      .should("have.value", "test@cypress.com");

    cy.findByText(/email is required/i).should("not.exist");

    cy.get('input[name="password"]')
      .should("exist")
      .should("be.empty")
      .type("test123456")
      .should("have.value", "test123456");
  });

  it("Login with correct credentials works", () => {
    cy.findByLabelText(/email/i)
      .should("exist")
      .should("be.empty")
      .type("saadee7223@gmail.com")
      .should("have.value", "saadee7223@gmail.com");

    cy.findByLabelText(/password/i)
      .should("exist")
      .should("be.empty")
      .type("test123456")
      .should("have.value", "test123456");

    cy.findByRole("button", { name: /continue/i }).click();

    cy.url().should("not.contain", "/login").should("eq", "http://localhost:3000/");
  });
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {};
