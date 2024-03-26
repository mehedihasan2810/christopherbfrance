describe("Navigation", () => {
  it("should navigate to home page", () => {
    cy.visit("http://localhost:3000");

    cy.get("h1").contains(
      "Let's use computers to address important social problems with urgency, clarity and creativity."
    );
  });

  it("should navigate to the work page", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href*="/work"]').click();

    cy.url().should("include", "/work");

    cy.get("h1").contains("Christopher France");
  });

  it("should navigate to the contact page", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href*="/contact"]').click();

    cy.url().should("include", "/contact");

    cy.get("h3").contains("Contact Christopher");
  });

  it("should navigate to the posts/portfolios page", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href*="/the-data-guild"]').click();

    cy.url().should("include", "/the-data-guild");

    cy.get("h1").contains("The Data Guild");
  });

  it("should navigate to the posts/portfolios > resume page", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href*="/the-data-guild"]').click();

    cy.url().should("include", "/the-data-guild");

    cy.get('a[href*="/resume"]').click();

    cy.url().should("include", "/resume");

    cy.get("h1").contains("Christopher Blow France");
  });
});
