/// <reference types ="cypress"/>

export class MainPage {
    elements = {
        title : () => cy.title(),
        modalWindow: () => cy.get('[data-cy="modal-window"]'),
        closeButton: () => cy.get('[data-cy="close-button"]'),
        newGameButton: () => cy.get('[data-cy="main-button"]'),
        editButton: () => cy.get('[data-cy="edit-button"]'),
        exitButton: () => cy.get('[data-cy="exit-button"]'),
    } 

    allButtonsAndModalWindowIsAvailable() {
      this.elements.title().should('eq','Shoot game');
      this.elements.modalWindow().should('be.visible');
      this.elements.closeButton().should('be.visible');
      this.elements.newGameButton().should('be.visible');
      this.elements.editButton().should('be.visible');
      this.elements.exitButton().should('be.visible');
  }    
}

export const mainPage =new MainPage();