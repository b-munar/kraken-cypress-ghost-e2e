Feature: V4-44 Create Post - Crear Post

@user1 @web
Scenario: As an administrator user I create a post in Ghost V4.44 - Como usuario administrador creo un post
  Given I navigate to page "<HOST2>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>" V4.44
  And I wait for 2 seconds
  And I enter password "<PASSWORD>" V4.44
  And I wait for 2 seconds
  And I click sign in V4.44
  And I wait for 3 seconds
  And I click Post
  And I wait for 2 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post Title "new-post-title" V4.44
  And I wait for 2 seconds
  And I enter Post content "new-post-body"
  And I wait for 2 seconds
  And I click Publish Dropdown in Post V4.44
  And I wait for 2 seconds
  And I click Publish in Post V4.44
  And I wait for 2 seconds
  Then I click confirm Publish V4.44
  And I wait for 2 seconds