Feature: Make sure Wtfismygenericthing is plumbed in correctly

  Scenario: Get root
    When I send a GET request to "/"
    Then the response status should be "200"
