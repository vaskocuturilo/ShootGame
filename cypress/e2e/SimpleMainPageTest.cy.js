/// <reference types ="cypress"/>

import { mainPage } from "../support/pages/MainPage.cy"

describe('Smoke automation scripts.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  context('Main page.',  ()=> {
    it('Try to check that all elements in the menu on the main page are available.', () => {
     mainPage.allButtonsAndModalWindowAreAvailable();
    })
  })
})