/// <reference types="cypress" />

/* eslint-disable @typescript-eslint/no-explicit-any */

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "https://api.sailspad.com/auth/signin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
      username: "saadee7223@gmail.com",
      password: "12345678"
    })
  }).then((resp: any) => {
    window.localStorage.setItem("access_token", resp.access_token);
  });
});
