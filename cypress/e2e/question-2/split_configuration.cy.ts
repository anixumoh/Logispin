import GooglePage from "../../pom/GooglePage";

//Call getBaseUrl() to get environment specific url value
const googlePage = new GooglePage();
let envi: string = Cypress.env('ENV');
let url: string = Cypress.config('baseUrl')

describe(`Google page tests for ${url} `, () => {

    before("", () => {
        cy.visit("/");
    })

    it('Verify page title based on environment', () => {
        let pageTitle: string;

        if (envi === 'production') {
            //Test block would contain all production elements & environment related tests
            pageTitle = 'Google';
            googlePage.assertPageTitle(pageTitle);
        }
        else if(envi === 'staging') {
            //Test block would contain all staging elements & environment related tests
            pageTitle = 'Google';
            googlePage.assertPageTitle(pageTitle);
        }
    });
});