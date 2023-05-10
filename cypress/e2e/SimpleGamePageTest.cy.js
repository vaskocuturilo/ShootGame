/// <reference types ="cypress"/>

import { gamePage } from "../support/pages/GamePage.cy"
import { mainPage } from "../support/pages/MainPage.cy"

describe('Smoke automation scripts.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  context('Game page.',  ()=> {
    it('Try to check that all elements are available on the game page.', () => {
      mainPage.tapNewGameButton();
      gamePage.verifyThatAllElementsAreAvailable();
    })
  })
})