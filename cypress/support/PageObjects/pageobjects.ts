export class Page {


    // Visiting a webpage
    public static visitPage(webpage: string): Cypress.Chainable {
        return cy.visit(webpage);
    }

    // Finding / Checking Applicant
    public static findApplicant(applicant: string, state: string): Cypress.Chainable {
        state = state.toLowerCase();
        applicant = applicant.toLowerCase();

        switch (state) {
            case 'applied':
                return cy.get('.App-column').find('h2')
                    .contains('Applied')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant);
            case 'interviewing':
                return cy.get('.App-column').find('h2')
                    .contains('Interviewing')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant);
            case 'hired':
                return cy.get('.App-column').find('h2')
                    .contains('Hired')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant);
            default:
                throw Error('Invalid State');
        }
    }

    public static checkApplicantInState(applicant: string, state: string): Cypress.Chainable {
        state = state.toLowerCase();
        applicant = applicant.toLowerCase();
        switch (state) {
            case 'applied':
                return cy.get('.App-column').find('h2')
                    .contains('Applied')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ');
            case 'interviewing':
                return cy.get('.App-column').find('h2')
                    .contains('Interviewing')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ');
            case 'hired':
                return cy.get('.App-column').find('h2')
                    .contains('Hired')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ');
            default:
                throw Error('Invalid State');
        }


    }

    public static numberofApplicantDisplayed(number: string): Cypress.Chainable {
        return cy.get('.CrewMember-container')
            .should("have.length", parseInt(number));

    }

    public static checkApplicantNameDisplayed(applicant: string): Cypress.Chainable {
        applicant = applicant.toLowerCase();
        return cy.get('.CrewMember-info > .CrewMemeber-name ').contains(applicant);

    }



    //Clicking on a button

    public static shiftRightApplicant(applicant: string, state: string): Cypress.Chainable {
        applicant = applicant.toLowerCase();
        state = state.toLowerCase();

        switch (state) {
            case 'applied':
                return cy.get('.App-column').find('h2')
                    .contains('Applied')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant)
                    .parents('.CrewMember-container')
                    .find('.CrewMember-toolbar > .CrewMember-up')
                    .should('contain', ">")
                    .click();
            case 'interviewing':
                return cy.get('.App-column').find('h2')
                    .contains('Interviewing')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant)
                    .parents('.CrewMember-container')
                    .find('.CrewMember-toolbar > .CrewMember-up')
                    .should('contain', ">")
                    .click();
            case 'hired':
                throw Error('Can not shift Right from Hired State');
            default:
                throw Error('Invalid State');
        }

    }

    public static shiftLeftApplicant(applicant: string, state: string): Cypress.Chainable {
        applicant = applicant.toLowerCase();
        state = state.toLowerCase()

        switch (state) {
            case 'applied':
                throw Error('Can not shift Left from Applied State');
            case 'interviewing':
                return cy.get('.App-column').find('h2')
                    .contains('Interviewing')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant)
                    .parents('.CrewMember-container')
                    .find('.CrewMember-toolbar > :not(.CrewMember-up)')
                    .should('contain', "<")
                    .click();
            case 'hired':
                return cy.get('.App-column').find('h2')
                    .contains('Hired')
                    .parent()
                    .find('.CrewMember-info > .CrewMemeber-name ')
                    .contains(applicant)
                    .parents('.CrewMember-container')
                    .find('.CrewMember-toolbar > :not(.CrewMember-up)')
                    .should('contain', "<")
                    .click();
            default:
                throw Error('Invalid State');
        }

    }

    public static clickButton(button: string): Cypress.Chainable {
        button = button.toLowerCase();
        switch (button) {
            case 'submit':
                return cy.get('[type="submit"]').click();
            case 'clear':
                return cy.get('#filters > [type="button"]').click();
            default:
                throw Error('Button not matched');

        }
    }

    //Enter Data

    public static enterText(searchText: string, searchField: string): Cypress.Chainable {
        searchText = searchText.toLowerCase();
        searchField = searchField.toLowerCase();

        cy.get('#name').clear().then(() => {
            cy.get('#city').clear();
        })

        switch (searchField) {
            case 'name':
                return cy.get('#name')
                    .type(searchText);

            case 'city':
                return cy.get('#city')
                    .type(searchText);
            default:
                throw Error('Search Field is matched');

        }
    }

    public static StateObject(state: string): Cypress.Chainable {
        state = state.toLowerCase();

        switch (state) {
            case 'applied':
                return cy.get('.App-column').find('h2')
                    .contains('Applied')
                    .parent()
            case 'interviewing':
                return cy.get('.App-column').find('h2')
                    .contains('Interviewing')
                    .parent()
            case 'hired':
                return cy.get('.App-column').find('h2')
                    .contains('Hired')
                    .parent()
            default:
                throw Error('Invalid State');
        }

    }



}

