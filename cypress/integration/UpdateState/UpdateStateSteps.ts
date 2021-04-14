import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Page } from "../../support/PageObjects/pageobjects";


Given('I open the {string} page', (pageurl) => {
    Page.visitPage(pageurl);
});

And('the page has {string} as applicant in {string} state', (applicant, state) => {
    applicant = applicant.toLowerCase();

    // Following function returns state DOM
    Page.StateObject(state)
        .find('.CrewMember-info > .CrewMemeber-name ')
        .contains(applicant);

});

When('I click button {string} to shift {string} from {string} state', (buttonDirection, applicant, currentState) => {
    buttonDirection = buttonDirection.toLowerCase();
    applicant = applicant.toLowerCase();

    //Switch function to click on left arrow / right arrow button in crew container
    switch (buttonDirection) {
        case 'moveright':
            Page.StateObject(currentState) // returns state DOM
                .find('.CrewMember-info > .CrewMemeber-name ') // finds Crew Member Name class
                .contains(applicant) // checks specified applicant is present
                .parents('.CrewMember-container') // Navigate back to the immediate parent div
                .find('.CrewMember-toolbar > .CrewMember-up') // find CrewMember-up class under the immediate parent
                .should('contain', ">") // checks the class contain move right arrow button
                .click();
            break;
        case 'moveleft':
            Page.StateObject(currentState) // returns state DOM
                .find('.CrewMember-info > .CrewMemeber-name ') // finds Crew Member Name class
                .contains(applicant)// checks specified applicant is present
                .parents('.CrewMember-container') // Navigate back to the immediate parent div
                .find('.CrewMember-toolbar > :not(.CrewMember-up)')// find CrewMember-toolbar class which does not have "CrewMember-up" class, under the immediate parent
                .should('contain', "<") // checks the class contain move left arrow button
                .click();
            break;
        default:
            throw Error('Not matched directions');
    }

})

And('the applicant {string} is not displayed in {string}', (applicant, state) => {
    applicant = applicant.toLowerCase();

    // Following function returns state DOM
    Page.StateObject(state)
        .find('.CrewMember-info > .CrewMemeber-name ') // checks on retruned state dom , the specified applicant is not 
        .should("not.contain", applicant);

});