Feature: V4-44 See about ghost - ver sobre ghost

@user1 @web
Scenario: As an administrator user I see abour ghost in Ghost 4.44 - Como usuario administrador vere informacion sobre ghost
  Given I navigate to page "<HOST2>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>" V4.44
  And I wait for 2 seconds
  And I enter password "<PASSWORD>" V4.44
  And I wait for 2 seconds
  And I click sign in V4.44
  And I wait for 2 seconds
  And I click in menu Profile V4.44
  And I wait for 2 seconds
  And I click About Ghost V4.44
  And I wait for 2 seconds
