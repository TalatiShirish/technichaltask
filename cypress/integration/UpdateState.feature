Feature: User can update the Applicant state
    I want to update applicants state

    Background: I load the page
        Given I open the "http://localhost:3000" page

    Scenario Outline:Update Applicant state
        And the page has "<applicantName>" as applicant in "<CurrentState>" state
        When I click button "<direction>" to shift "<applicantName>" from "<CurrentState>" state
        Then the page has "<applicantName>" as applicant in "<targetState>" state
        And the applicant "<applicantName>" is not displayed in "<notDisplayedState1>"
        And the applicant "<applicantName>" is not displayed in "<notDisplayedState2>"

        Examples:
            | applicantName  | CurrentState | direction | targetState  | notDisplayedState1 | notDisplayedState2 |
            | Linda Ruiz     | Applied      | MoveRight | Interviewing | Applied            | Hired              |
            | Lloyd Gonzalez | Applied      | MoveRight | Interviewing | Applied            | Hired              |
            | Emma Stewart   | Applied      | MoveRight | Interviewing | Applied            | Hired              |
            | Danielle Moore | Applied      | MoveRight | Interviewing | Applied            | Hired              |
    Scenario: Update Applicant State from Applied to Hired state
        And the page has "Linda Ruiz" as applicant in "Applied" state
        When I click button "MoveRight" to shift "Linda Ruiz" from "Applied" state
        Then the page has "Linda Ruiz" as applicant in "Interviewing" state
        When I click button "MoveRight" to shift "Linda Ruiz" from "Interviewing" state
        Then the page has "Linda Ruiz" as applicant in "Hired" state

    Scenario: Update Applicant State from Hired to Applied state
        And the page has "Julia Cunningham" as applicant in "Hired" state
        When I click button "MoveLeft" to shift "Julia Cunningham" from "Hired" state
        Then the page has "Julia Cunningham" as applicant in "Interviewing" state
        When I click button "MoveLeft" to shift "Julia Cunningham" from "Interviewing" state
        Then the page has "Julia Cunningham" as applicant in "Applied" state
