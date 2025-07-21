describe('Basic Site Navigation', () => {
    it('should open the homepage', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.url().should('include', 'ecommerce');
    });
  
    it('should click the special button and navigate to specials', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
    // targets the hot badge with force true
    cy.contains('span.badge', 'Hot').parent('a').click({ force: true });

    cy.url().should('include', '/index.php?route=product/special');
    });
  });
  