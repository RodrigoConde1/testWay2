Feature: jsonplaceholder Test

  Scenario: Make a call to /user endpoint and search for a user
    Given Client call user endpoint
    Then Validate that username exist

  Scenario Outline: Make a call  to /post endpoint
    Given Client make a new post with userid "<userID>", title "<title>" and body "<body>"
    Then Validate that response return userid "<userID>", title "<title>" and body "<body>"

    Examples:
    |userID|title|body|
    |55|foo|bar|

  Scenario: Make a call to /photos endpoint and check response time 
    Given Client make a post to endpoint photos
    Then Validate that the call is successful

