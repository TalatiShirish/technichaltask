import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Page } from "../../support/PageObjects/pageobjects";


Given('I open the {string} page', (pageurl) => {
    Page.visitPage(pageurl);
});

When('I enter {string} in {string} search field and press {string} button',(searchText, searchField, button)=>{
    Page.enterText(searchText, searchField).then(() => {
        Page.clickButton(button);
    })
})

Then('Total {string} applicant dislayed in the page', (numberOfApplicants) => {
    Page.numberofApplicantDisplayed(numberOfApplicants);
});

And('The displayed applicant name is {string}', (applicant) => {
    Page.checkApplicantNameDisplayed(applicant);
})

And('I have clicked on {string}', (button) => {
    Page.clickButton(button);
})