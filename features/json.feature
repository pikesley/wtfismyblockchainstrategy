@vcr
Feature: Get JSON

  Background:
    Given I send and accept JSON

  Scenario: Get JSON for a repo
    When I send a GET request to "data"
    Then the response status should be "200"
    And the JSON response should have "$.things[0]"
