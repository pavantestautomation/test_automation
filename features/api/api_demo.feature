@api
Feature: Test API

    Verfies the response body

    Scenario: Verify Test API details
        Given the rest api
            """
      The cucumber (Cucumis sativus) is a widely cultivated plant in the gourd family Cucurbitaceae.
            """
        When client send GET request: '/echo/get/json'
        Then response status should be successfull