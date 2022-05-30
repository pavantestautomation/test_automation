@ui
Feature: Test mail one menu bar section
  Verfies mail one menu bar basic functionality.

  Rule: The sections should contains relevant details.

    Example: Verify news details
      Given the homepage
      When user navigate to news page
      Then news details are displayed

    Example: Verify sports details
      Given the homepage
      When user navigate to sports page
      Then maximize and minimizing first video
