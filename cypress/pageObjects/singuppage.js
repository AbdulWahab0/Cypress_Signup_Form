class singuppage {
  getcountryList() {
    return cy.get(
      ".MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root",
      { force: true }
    );
  }
  getSelectCountry() {
    return cy.get(".MuiAutocomplete-option.jss15").click({ force: true });
  }
  getSingupPage() {
    return cy.visit("https://app.gush.pro/bookpay/joinus");
  }
  getFirstName() {
    return cy.get(
      ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getSurName() {
    return cy.get(
      ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getEmail() {
    return cy.get(
      ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getConfirmEmail() {
    return cy.get(
      ":nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getPassword() {
    return cy.get(
      ".position-relative > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getPasswordLengthStatus() {
    return cy.get(".position-relative > :nth-child(2)");
  }
  getCheckBox() {
    return cy.get(".jss32").not("[disabled]").check().should("be.checked");
  }
  getPrivacyText() {
    return cy.get(".flex-container-vert-top > div");
  }
  getPrivacyTermsLink() {
    return cy.get(".flex-container-vert-top > div > :nth-child(1)");
  }
  getPrivacyPolicyLink() {
    return cy.get(".flex-container-vert-top > div > :nth-child(2)");
  }
  signupToGush() {
    return cy.get(".top-margin-20 > .MuiGrid-root > .MuiButtonBase-root");
  }
  getHomepage() {
    return cy.url().should("eq", "https://app.gush.pro/bookpay/uploadpic");
  }
  uploadProfilePicture() {
    const yourFixturePath = "nature.jpg";
    return cy.get('input[type="file"]').attachFile(yourFixturePath);
  }
}

export default singuppage;
