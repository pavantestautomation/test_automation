@api
Feature: Test API

    Verfies the response body

    Scenario: Verify Test API details
        Given the rest api
        When client send GET request: '/echo/get/json'
            """Test API Query"""
        Then response status should be successfull

