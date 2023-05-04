/// <reference types ="cypress"/>

describe('Smoke automation scripts.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  context('Main page.',  ()=> {
    it('Try to check correct title', () => {
      cy.title().should('eq','Shoot game');
    })
  })
})