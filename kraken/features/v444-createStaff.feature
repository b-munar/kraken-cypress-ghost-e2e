Feature: V4-44 Send Staff Invitation - Enviar invitacion de Staff

@user1 @web
Scenario: As an administrator user I send a staff invitation in Ghost V4.44 - Como usuario administrador envio una invitacion de staff
  Given I navigate to page "<HOST2>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>" V4.44
  And I wait for 2 seconds
  And I enter password "<PASSWORD>" V4.44
  And I wait for 2 seconds
  And I click sign in V4.44
  And I wait for 5 seconds
  And I click Settings V4.44
  And I wait for 2 seconds
  And I click Staff V4.44
  And I wait for 2 seconds
  And I click Invite people V4.44
  And I wait for 2 seconds 
  And I enter invite email "<INVITEEMAIL>" V4.44
  And I wait for 2 seconds
  And I click Send invitation V4.44
  And I wait for 3 seconds
  Then I reload Staff page
  And I wait for 2 seconds
  And I check the invitation was sent to email "<INVITEEMAIL>"