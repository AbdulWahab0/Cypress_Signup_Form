@ActivateSegment
Feature: Automate End to End Signup functionality for Gush WebApp.

    @e2e
    Scenario: Verify mandatory fields for signup form
        Given the user  is on signnup page
        When  the user click on save button
        Then  user is able to view error for validation

    @e2e
    Scenario: Verify Signup user that already exist
        Given the user open signup page
        When the user type in
            | country        |  | Firstname | Surname |  | Email              |  | confirm_email      |  | password    |
            | United Kingdom |  | test      | test111 |  | GusAppss@gmail.com |  | GusAppss@gmail.com |  | 14FollowUp! |
        Then User is able to view the validation for user already exits


    @e2e
    Scenario: Verfiy email and confirm email does not match validation
        Given the user open signup page
        When the user type wrong email for email and confirm email fields
            | country        |  | Firstname | Surname  |  | Email               |  | confirm_email       |  | password    |
            | United Kingdom |  | test      | test1111 |  | testEmail@gmail.com |  | testEmail@gmail.com |  | 14FollowUp! |
        Then User is able to view the validation for Emails don't match.

    @e2e
    Scenario: Verfiy new user signup
        Given the user open signup page
        When  the user type all mention fields
            | country        |  | Firstname | Surname  |  | Email             |  | confirm_email     |  | password    |
            | United Kingdom |  | test      | test1111 |  | newUser@gmail.com |  | newUser@gmail.com |  | 14FollowUp! |
        Then  User is able to view first name "test" should be shown on homepage header

    @e2e
    Scenario: Verify upload profile picture
        Given the user  is on homae page of gush web app
        When the user click on upload profile picture box
        Then user is able to view newly upload picture


