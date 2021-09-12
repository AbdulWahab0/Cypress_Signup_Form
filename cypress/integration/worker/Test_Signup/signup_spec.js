/// <reference types="Cypress" />
import SignupPage from "../../../pageObjects/singuppage.js";
var faker = require("faker");
let email = "";

// Page object model for : Signup page
const signupPage = new SignupPage();

// Required fields validation
Given("the user  is on signnup page", () => {
  signupPage.getSingupPage();
});
When("the user click on save button", () => {
  signupPage.signupToGush().should("be.visible").click();
});
Then("user is able to view error for validation", () => {
  cy.get(".MuiSnackbar-root > .MuiPaper-root")
    .should("be.visible")
    .contains("Required");
});

// already existing User validation
Given("the user open signup page", () => {
  signupPage.getSingupPage();
});

When("the user type in", (datatable) => {
  datatable.hashes().forEach((element) => {
    signupPage.getcountryList().click().type(element.country);
    signupPage.getSelectCountry();
    signupPage.getFirstName().should("be.visible").type(faker.name.firstName());
    signupPage.getSurName().should("be.visible").type(faker.name.lastName());
    signupPage.getEmail().should("be.visible").type(element.Email);
    signupPage
      .getConfirmEmail()
      .should("be.visible")
      .type(element.confirm_email);
    signupPage
      .getPassword()
      .should("be.visible")
      .type(faker.internet.password());
    signupPage.getCheckBox();
    signupPage.getPrivacyText().should("be.visible");
    signupPage.getPrivacyTermsLink().should("be.visible").click();
    signupPage.getPrivacyPolicyLink().should("be.visible").click();
  });
  Then(
    "User is able to view the validation for user already exits",
    (content) => {
      signupPage.signupToGush().should("be.visible").click();
      cy.get(".MuiSnackbar-root > .MuiPaper-root")
        .should("be.visible")
        .contains("User already registered.");
    }
  );
});

// User email and confirm email validation
Given("the user open signup page", () => {
  signupPage.getSingupPage();
});

When(
  "the user type wrong email for email and confirm email fields",
  (datatable) => {
    datatable.hashes().forEach((element) => {
      signupPage.getcountryList().click().type(element.country);
      signupPage.getSelectCountry();
      signupPage
        .getFirstName()
        .should("be.visible")
        .type(faker.name.firstName());
      signupPage.getSurName().should("be.visible").type(faker.name.lastName());
      signupPage.getEmail().should("be.visible").type(faker.internet.email());
      signupPage
        .getConfirmEmail()
        .should("be.visible")
        .type(faker.internet.email());
      signupPage
        .getPassword()
        .should("be.visible")
        .type(faker.internet.password());
      signupPage.getCheckBox();
      signupPage.getPrivacyText().should("be.visible");
      signupPage.getPrivacyTermsLink().should("be.visible").click();
      signupPage.getPrivacyPolicyLink().should("be.visible").click();
    });
    Then(
      "User is able to view the validation for Emails don't match.",
      (content) => {
        signupPage.signupToGush().should("be.visible").click();
        cy.get(".MuiFormHelperText-root").should("be.visible");
      }
    );
  }
);

// New User Signup  on Gush app
Given("the user open signup page", () => {
  signupPage.getSingupPage();
});

When("the user type all mention fields", (datatable) => {
  const email = faker.internet.email();
  datatable.hashes().forEach((element) => {
    signupPage.getcountryList().click().type(element.country);
    signupPage.getSelectCountry();
    signupPage.getFirstName().should("be.visible").type(faker.name.firstName());
    signupPage.getSurName().should("be.visible").type(faker.name.lastName());
    signupPage.getEmail().should("be.visible").type(email);
    signupPage.getConfirmEmail().should("be.visible").type(email);
    signupPage
      .getPassword()
      .should("be.visible")
      .type(faker.internet.password());
    signupPage.getCheckBox();
    signupPage.getPrivacyText().should("be.visible");
    signupPage.getPrivacyTermsLink().should("be.visible").click();
    signupPage.getPrivacyPolicyLink().should("be.visible").click();
  });
  Then(
    "User is able to view first name {string} should be shown on homepage header",
    (content) => {
      signupPage.signupToGush().should("be.visible").click();
    }
  );
});

// Verify upload profile picture

Given("the user  is on homae page of gush web app", () => {
  signupPage.getHomepage();
});

When("the user click on upload profile picture box", () => {
  signupPage.uploadProfilePicture();
});

Then("user is able to view newly upload picture", () => {
  cy.get(".MuiButton-contained").click();
});
