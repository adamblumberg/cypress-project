describe('Homepage Navigation Tests', () => {
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io');
    });
    //nagivate to the homepage before each navigation test
  
    it('Home button should navigate to Home page and load', () => {
        cy.get("span.title:contains(' Home')").click();
        //find the home button and click it
        cy.url().should('include', 'route=common/home')
         //validate the URL is correct
        cy.get("span.title:contains(' Home')").should('exist')
        //validate the home button loads in
    });

    it('Special button functions and page loads', () => {
        cy.get("#widget-navbar-217834 ul.horizontal")
        .find("li:contains(' Special')")
        .click()    
        //find special button and click it

        cy.url().should('include', 'route=product/special')
        //validate the URL is correct
        
        cy.get("h1.h3:contains('Special Offers')").should('exist');
        //validate that special offers header loads in
    });


    });