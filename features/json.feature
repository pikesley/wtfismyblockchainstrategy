Feature: Get JSON

  Background:
    Given I send and accept JSON

  Scenario: Get JSON for a repo
    When I send a GET request to "/"
    Then the response status should be "200"
    And the JSON response should have "$.templates[0]" with the text "to put @things into a blockchain in order to disrupt @disruptable and annoy @annoyable"
