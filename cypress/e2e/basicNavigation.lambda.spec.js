describe('Basic Site Navigation', () => {
    it('should open the homepage', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.url().should('include', 'ecommerce');
    });
  
    it('should navigate to a different page', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=product/special"]').click();
      cy.url().should('include', 'special');
    });
  });
  