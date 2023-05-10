/// <reference types ="cypress"/>

export class GamePage {
    elements = {
        soldierOne: () => cy.get('[data-cy="soldier-1"]'),
        soldierTwo: () => cy.get('[data-cy="soldier-2"]'),
        soldierThree: () => cy.get('[data-cy="soldier-3"]'),
        shotgun: () => cy.get('[data-cy="shotgun"]'),
        scoreContainer: ()=> cy.get('[data-cy="score-container"]'),
        bulletContainer: ()=> cy.get('[data-cy="bullet-counter"]'),
        bulletOne: ()=> cy.get('[data-cy="bullet-1"]'),
        bulletTwo: ()=> cy.get('[data-cy="bullet-2"]'),
        bulletThree: ()=> cy.get('[data-cy="bullet-3"]'),
        bulletCounter: () => cy.get('[data-cy="bullet-counter"]'),
        audioFire: () => cy.get('[data-cy="audio-fire"]')
    } 

    verifyThatAllElementsAreAvailable() {
      this.elements.soldierOne().should('be.visible');
      this.elements.soldierTwo().should('be.visible');
      this.elements.soldierThree().should('be.visible');
      this.elements.shotgun().should('be.visible');
      this.elements.scoreContainer().should('be.visible');  
      this.elements.bulletContainer().should('be.visible');
      this.elements.bulletOne().parent().scrollIntoView().should('be.visible');
      this.elements.bulletTwo().parent().scrollIntoView().should('be.visible');
      this.elements.bulletThree().parent().scrollIntoView().should('be.visible');
      this.elements.bulletCounter().should('be.visible');
      this.elements.audioFire().invoke('attr', 'src')
      .then((audiofile) => {
        const audio = new Audio(audiofile);
        audio.play();
      });
    }
}

export const gamePage = new GamePage();