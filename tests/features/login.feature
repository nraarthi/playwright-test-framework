Feature: Gmail Login

  Scenario Outline: Login with multiple credentials
    Given I navigate to the Gmail login page
    When I enter the email "<email>"
    And I click on Next button after email
    And I enter the password "<password>"
    And I click on Next button after password
    Then I should see the inbox page

  Examples:
    | email             | password      |
    | arvaliduser@gmail.com    | Password@01   |
    | arvaliduser1@gmail.com  | Password@02 |

  Scenario: Login with invalid email format
  Given I navigate to the Gmail login page
  When I enter the email "12345.com"
  And I click on Next button after email
  Then I should see an error message "Couldn’t find your Google Account"
