Feature: V4-44 Create Page - Crear Page

@user1 @web
Scenario: As an administrator user I create a page in Ghost V4.44 - Como usuario administrador creo un page
  Given I navigate to page "<HOST2>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>" V4.44
  And I wait for 2 seconds
  And I enter password "<PASSWORD>" V4.44
  And I wait for 2 seconds
  And I click sign in V4.44
  And I wait for 5 seconds
  And I click Pages
  And I wait for 2 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter title "<PAGETITLE>" V4.44
  And I wait for 2 seconds
  And I enter content "<PAGECONTENT>"
  And I wait for 2 seconds
  And I click Publish Dropdown V4.44
  And I wait for 2 seconds
  And I click Publish V4.44
  And I wait for 3 seconds
  And I click Pages Back
  And I wait for 2 seconds
  Then I check the page is published with title "<PAGETITLE>"