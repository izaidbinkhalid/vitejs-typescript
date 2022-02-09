/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("Sign Up Page", () => {
  it("Has the link on login page", () => {
    cy.visit("http://localhost:3000/login");
    cy.findByText(/create an account/i)
      .should("exist")
      .should("be.visible")
      .click();
    cy.url().should("not.contain", "/login").should("eq", "http://localhost:3000/signup");
  });
  it("Has the Correct UI", () => {
    cy.findByText("Select Account Type:").should("exist").should("be.visible");
    cy.contains("For freelancers,");
    cy.contains("Created for Businesses");
  });
  it("Checking Validation", () => {
    cy.contains(
      "Created for Businesses that aims to achieve more reach online and offline through Sailspad cards, publications, reach analytics, SEO and Much more"
    ).click();
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByText(/email is required/i).should("not.be.null");

    cy.findByText(/password is required/i).should("not.be.null");
  });
  it("Checking existing user", () => {
    cy.findByLabelText(/email/i)
      .should("exist")
      .should("be.empty")
      .type("test@cypress.com")
      .should("have.value", "test@cypress.com");

    cy.findByText(/email is required/i).should("not.exist");

    cy.findByLabelText(/password/i)
      .should("exist")
      .should("be.empty")
      .type("test123456")
      .should("have.value", "test123456");
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByText(/User with email as test@cypress.com already exists/i).should("exist");
  });

  it("Creating new user", () => {
    cy.findByLabelText(/email/i)
      .should("exist")
      .clear()
      .should("be.empty")
      .type("newuser@cypress.com")
      .should("have.value", "newuser@cypress.com");

    cy.findByText(/email is required/i).should("not.exist");

    cy.findByLabelText(/password/i)
      .should("exist")
      .clear()
      .should("be.empty")
      .type("test123456")
      .should("have.value", "test123456");
    // sumitting form
    cy.findByRole("button", { name: /continue/i }).click();
  });

  it("moved to second step", () => {
    cy.contains("Enter Account Details:").should("exist").should("be.visible");
  });
  it("Entering Values", () => {
    cy.get('input[name="first_name"]')
      .should("exist")
      .should("be.empty")
      .type("Cypress First")
      .should("have.value", "Cypress First");

    cy.get('input[name="last_name"]')
      .should("exist")
      .should("be.empty")
      .type("Cypress Last")
      .should("have.value", "Cypress Last");

    cy.get('input[name="company_name"]')
      .should("exist")
      .should("be.empty")
      .type("Cypress Company")
      .should("have.value", "Cypress Company");
  });
  it("checking Validation", () => {
    cy.findByRole("button", { name: /continue/i }).click();
  });
  it("checking existing username", () => {
    cy.get('input[name="username"]')
      .should("exist")
      .should("be.empty")
      .type("cypressTest")
      .should("have.value", "cypressTest");
    cy.findByText(/Username already exists/i).should("exist");
  });

  it("creating new username", () => {
    cy.get('input[name="username"]')
      .should("exist")
      .clear()
      .should("be.empty")
      .type("testusername")
      .should("have.value", "testusername");
    cy.findByText(/Username already exists/i).should("not.exist");
  });
  it("entering company description", () => {
    cy.get('input[name="description"]')
      .should("exist")
      .should("be.empty")
      .type("This is my Company description")
      .should("have.value", "This is my Company description");
  });

  it("entering wrong date of birth", () => {
    cy.get('input[type="date"]')
      .should("exist")
      .should("be.empty")
      .type("2007-08-11")
      .should("have.value", "2007-08-11");
    cy.findByText(/Required age is 16/i).should("exist");
    cy.findByRole("button", { name: /continue/i }).click();
  });

  it("entering date of birth", () => {
    cy.get('input[type="date"]')
      .should("exist")
      .clear()
      .should("be.empty")
      .type("1999-08-11")
      .should("have.value", "1999-08-11");
    cy.findByText(/Required age is 16/i).should("not.exist");
    cy.findByRole("button", { name: /continue/i }).click();
  });
  it("selecting country", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("input#react-select-3-input")
      .click()
      .should("exist")
      .should("be.empty")
      .type(`United Arab Emirates`)
      .wait(1000)
      .type(`{enter}`);
  });
  it("selecting state", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("input#react-select-5-input")
      .click()
      .should("exist")
      .should("be.empty")
      .type("Abu Dhabi Emirate")
      .wait(1000)
      .type(`{enter}`);
  });
  it("selecting city", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("input#react-select-7-input")
      .click()
      .should("exist")
      .should("be.empty")
      .type("Al Dhafra")
      .wait(1000)
      .type(`{enter}`);
  });
  it("Entering address", () => {
    cy.get('input[name="address"]')
      .should("exist")
      .should("be.empty")
      .type("house#123, st#1, Al Dhafra Street, Dubai")
      .should("have.value", "house#123, st#1, Al Dhafra Street, Dubai");
  });

  it("Entering phone_number", () => {
    cy.get('input[name="phone_number"]')
      .should("exist")
      .should("be.empty")
      .type("+971123456789")
      .should("have.value", "+971 123456789");
  });
  it("onContinue", () => {
    cy.findByRole("button", { name: /continue/i }).click();
  });
  it("selecting Industry", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("input#react-select-9-input")
      .click()
      .should("exist")
      .should("be.empty")
      .type("Animation")
      .wait(1000)
      .type(`{enter}`);
  });

  it("Entering profession", () => {
    cy.get('input[name="profession"]')
      .should("exist")
      .should("be.empty")
      .type("Engineering")
      .should("have.value", "Engineering");
  });

  it("selecting 2 skills", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("input#react-select-11-input")
      .click()
      .should("exist")
      .should("be.empty")
      .type("Big Data")
      .wait(1000)
      .type(`{enter}`)
      .type("Data Mining")
      .wait(1000)
      .type(`{enter}`);
    cy.findByRole("button", { name: /continue/i }).click();
  });
  it("selecting 3 skills", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("input#react-select-11-input")
      .click()
      .should("exist")
      .clear()
      .should("be.empty")
      .type("Documentation")
      .wait(1000)
      .type(`{enter}`)
      .type("Data Mining")
      .wait(1000)
      .type(`{enter}`)
      .type("Development")
      .wait(1000)
      .type(`{enter}`);
  });

  it("onContinue", () => {
    cy.findByRole("button", { name: /continue/i }).click();
  });
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {};
