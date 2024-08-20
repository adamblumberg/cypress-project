describe('Search for Sony on eCommerce Playground', () => {
    it('should search for "sony" using the search field', () => {
      // Visit the homepage
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  
      // Click on the search field (refining the selector to target a specific instance)
      cy.get('input[name="search"]').eq(0).click();
  
      // Type 'sony' in the search field and press enter
      cy.get('input[name="search"]').eq(0).type('sony{enter}');
      
      cy.wait(500)
  
      // Optionally, you can add assertions to check if the results page loaded correctly
      cy.url().should('include', 'search=sony');
      //cy.get('img.title').contains(" Sony VAIO").should('exist'); 
      cy.get('img[alt="Sony VAIO"]').should('exist');
      //cy.get('img.title:contains("Sony VAIO").should('exist')');  // Checks that product results are displayed
    });
  });