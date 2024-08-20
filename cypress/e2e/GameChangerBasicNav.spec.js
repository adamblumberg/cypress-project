describe('Basic Site Accessibility', () => {
    it('Loads the home page successfully', () => {
      cy.visit('https://web.gc.com/teams');
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');
      cy.contains('Welcome').should('be.visible');
    });
  });