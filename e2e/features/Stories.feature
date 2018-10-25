Feature: Create a new Story
    
Scenario: Create a new Story
    Given user is on Pivotal Page
    When He click the Add story button
    And He create a new story with fields:
       | name    | story description |
    And He click on save button
    Then I verify if the Story is created