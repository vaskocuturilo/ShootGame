/// <reference types ="cypress"/>

export class GamePage {
    elements = {
        soldierOne: () => cy.get('[data-cy="soldier-1"]'),
        soldierTwo: () => cy.get('[data-cy="soldier-2"]'),
        soldierThree: () => cy.get('[data-cy="soldier-3"]'),
        shotgun: () => cy.get('[data-cy="shotgun"]'),
        scoreContainer: ()=> cy.get('[data-cy="score-container"]'),
        scoreText: () => cy.get('[data-cy="score-text"]'),
        scoreCounter: () => cy.get('[data-cy="score-counter"]'),
        bulletContainer: ()=> cy.get('[data-cy="bullet-counter"]'),
        bulletOne: ()=> cy.get('[data-cy="bullet-1"]'),
        bulletTwo: ()=> cy.get('[data-cy="bullet-2"]'),
        bulletThree: ()=> cy.get('[data-cy="bullet-3"]'),
        bulletCounter: () => cy.get('[data-cy="bullet-counter"]'),
        timeContainer: () => cy.get('[data-cy="time-container"]'),
        time: () => cy.get('[data-cy="time"]'),
        audioFire: () => cy.get('[data-cy="audio-fire"]'),
        toilet: () => cy.get('[data-cy="toilet"]'),
        gameOverWindow: () => cy.get('[data-cy="game-over-window"]'),
        gameOverText: () => cy.get('p'),
        closeButton: () => cy.get('[data-cy="close-button"]')
    } 

    verifyThatAllElementsAreAvailable() {
      this.elements.soldierOne().should('be.visible');
      this.elements.soldierTwo().should('be.visible');
      this.elements.soldierThree().should('be.visible');
      this.elements.shotgun().should('be.visible');
      this.elements.scoreContainer().should('be.visible');
      this.elements.scoreText().should('be.visible').and('have.text', 'Orcs');
      this.elements.scoreCounter().should('be.visible').and('have.text', '0');  
      this.elements.bulletContainer().should('be.visible');
      this.elements.bulletOne().parent().scrollIntoView().should('be.visible');
      this.elements.bulletTwo().parent().scrollIntoView().should('be.visible');
      this.elements.bulletThree().parent().scrollIntoView().should('be.visible');
      this.elements.bulletCounter().should('be.visible');
      this.elements.timeContainer().should('be.visible');
      this.elements.time().should('not.be.empty');
      cy.clock();
      this.elements.time().should('have.text', '26');

      this.elements.audioFire().invoke('attr', 'src')
      .then((audiofile) => {
        const audio = new Audio(audiofile);
        audio.play();
      });
    }

    shootSoldier() {
         this.elements.soldierOne().click();
         this.elements.soldierOne().should('not.be.visible');
         this.elements.toilet().should('be.visible');
         this.elements.scoreText().should('have.text', 'Orcs');
         this.elements.scoreCounter().should('have.text', '1');
    }

    shootSoldiers() {
      cy.get('.soldier').each(($el) => {
        cy.wrap($el).click();
      });

      this.elements.gameOverWindow().should('be.visible');
      this.elements.closeButton().should('be.visible');
      this.elements.gameOverText().should('have.text', 'Game over');
      this.elements.scoreText().should('have.text', 'Orcs');
      this.elements.scoreCounter().should('have.text', '2');
 }
}

export const gamePage = new GamePage();