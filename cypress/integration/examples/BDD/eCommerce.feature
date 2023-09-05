Feature: end to end Ecommerce validation

    
     @Regression
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add item to cart 
    Then select country ad verify the Succesfull message

    @smoke
    Scenario: filling the form for shoping
    Given I open Ecommerce page
    When I fill the form details
    Then Validate the behaviour 