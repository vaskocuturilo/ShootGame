/// <reference types ="cypress"/>

import { gamePage } from "../support/pages/GamePage.cy"
import { mainPage } from "../support/pages/MainPage.cy"

describe('Smoke automation scripts.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  context('Game page.',  ()=> {
    it('Try to kill one soldier.', () => {
      mainPage.tapNewGameButton();
      gamePage.shootSoldier();
    })
  })
})