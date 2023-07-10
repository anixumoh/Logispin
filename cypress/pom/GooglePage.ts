class GooglePage {
    assertPageTitle(pageTitle: string) {
        cy.title().should('eq', pageTitle);
    }
} export default GooglePage