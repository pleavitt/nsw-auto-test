Feature: A trip request can be executed and results returned

    Background:
        Given navigate to the homepage

    Scenario: 1 - Enter a trip and return a list of trips (Submit)
        When enter the text "North Sydney Station" into the "From" field
        And enter the text "Town Hall Station" into the "To" field
        When press the enter button

        Then should see "1" or more trips displayed

    Scenario: 2 - Enter a trip and return a list of trips (Go)
        When enter the text "North Sydney Station" into the "From" field
        And enter the text "Town Hall Station" into the "To" field
        When click the "Go" button

        Then should see "1" or more trips displayed


