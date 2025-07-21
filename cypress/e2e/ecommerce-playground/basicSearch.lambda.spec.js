describe('Search Functionality on eCommerce Playground', () => {
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io');
  });
  //nagivate to the homepage before each navigation test
    it('Test 1: User is able to search for "sony" using the search field', () => {
      // Visit the homepage
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  
      // Click on the search field
      cy.get('input[name="search"]').eq(0).click();
  
      // Type 'sony' in the search field and press enter
      cy.get('input[name="search"]').eq(0).type('sony{enter}');
      
      cy.wait(500)
  
      cy.url().should('include', 'search=sony');
      cy.get('img[alt="Sony VAIO"]').should('exist');
      // Checks that product results are displayed


    });

    it('Test 2: Search with no results returns null state', () => {
  
      // Click on the search field
      cy.get('input[name="search"]').eq(0).click();
  
      // Type 'invalid' in the search field and press enter
      // cy.get('input[name="search"]').eq(0).type('invalid{enter}');
      cy.get('input[data-autocomplete_route="extension/maza/product/product/autocomplete"]').type('invalid{enter}');
      
      cy.wait(500)
  
      cy.url().should('include', 'search=invalid');
      cy.contains('There is no product that matches the search criteria.').should('exist');
      // Checks that 'there is no product' message appears
    });

    it('Test 3: Search with special character returns cooresponding list of items', () => {
  
      // Click on the search field
      cy.get('input[name="search"]').eq(0).click();
  
      // Type 'quote' in the search field and press enter
      cy.get('input[name="search"]').eq(0).type('"{enter}');
      //cy.get('input[data-autocomplete_route="extension/maza/product/product/autocomplete"]').type('invalid{enter}');
      
      cy.wait(500)
  
      cy.url().should('include', 'search=%22');
      cy.get('div.text-right').contains('Showing 1').should('exist');
      // Checks that there is at least 1 result
    });

  });