Feature: User can filter the applicant details
    I want to filter the applicant details

    Scenario Outline: Filter the applicant details
        Given I open the "http://localhost:3000" page
        When I enter "<searchText>" in "<searchField>" search field and press "<button>" button
        Then Total "<numberOfApplicant>" applicant dislayed in the page
        And The displayed applicant name is "<displayedName>"
        And I have clicked on "Clear"
        Then Total "5" applicant dislayed in the page

        Examples:
            | searchText | searchField | numberOfApplicant | button | displayedName |
            | Linda      | Name        | 1                 | Submit | Linda         |
            | Hereford   | City        | 1                 | Submit | Lloyd         |
            | Julia      | Name        | 1                 | Submit | Julia         |