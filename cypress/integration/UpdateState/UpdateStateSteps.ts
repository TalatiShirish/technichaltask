import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Page } from "../../support/PageObjects/pageobjects";


Given('I open the {string} page', (pageurl) => {
    Page.visitPage(pageurl);
});

And('the page has {string} as applicant in {string} state', (applicant, state) => {
    applicant = applicant.toLowerCase();
    // Page.findApplicant(applicant, state)
    Page.StateObject(state)
        .find('.CrewMember-info > .CrewMemeber-name ')
        .contains(applicant);

});

When('I click button {string} to shift {string} from {string} state', (buttonDirection, applicant, currentState) => {
    buttonDirection = buttonDirection.toLowerCase();

    //Switch function to click on left arrow / right arrow button in crew container
    switch (buttonDirection) {
        case 'moveright':
            Page.shiftRightApplicant(applicant, currentState)
            break;
        case 'moveleft':
            Page.shiftLeftApplicant(applicant, currentState)
            break;
        default:
            throw Error('Not matched directions');
    }

})

And('the applicant {string} is not displayed in {string}', (applicant, state) => {
    // Following function returns the requried state DOM
    Page.checkApplicantInState(applicant, state)
        .should("not.contain", applicant);
});