describe("Guest Checkout: Shopping Cart Functionality", () => {
  it("Test 1: As a Guest, I can search for and add items to the cart", () => {
    //set the screen size
    cy.viewport(2544, 732);
    //visit the homepage
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    // Click on the search field
    cy.get('input[name="search"]').eq(0).click();
    // Type 'macbook pro' in the search field and press enter
    cy.get('input[name="search"]').eq(0).type('macbook pro{enter}');
    cy.wait(500)
    // Assert the search worked by checking URL and image availability
    cy.url().should('include', 'search=macbook+pro');
    cy.get('img[alt="MacBook Pro"]').should('exist');
    // Click the item (macbook pro)
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=62&search=macbook+pro"').click();
    // Click the Add to Cart button
    cy.get('button[title="Add to Cart"]').eq(1)
    //cy.contains('button', 'Add to Cart').eq(1)



    cy.get("#entry_217968 div.swiper-slide-active img").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=20");
    cy.get("#entry_212408 > div > div:nth-of-type(1) div.active > img").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=20&product_id=28");
    cy.get("#entry_216842 > button").click();
    cy.get("#notification-box-top div:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart");
    cy.get("#checkout-cart form input").click();
    cy.get("#checkout-cart form input").type("2");
    cy.get("form button.btn-primary").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart");
    cy.get("#container a.btn-primary").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout");
  });

  
  it("As a Guest, I can add items to the cart", () => {
    cy.viewport(2544, 732);
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    cy.get("#entry_217968 div.swiper-slide-active img").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=20");
    cy.get("#entry_212408 > div > div:nth-of-type(1) div.active > img").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=20&product_id=28");
    cy.get("#entry_216842 > button").click();
    cy.get("#notification-box-top div:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart");
    cy.get("#checkout-cart form input").click();
    cy.get("#checkout-cart form input").type("2");
    cy.get("form button.btn-primary").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart");
    cy.get("#container a.btn-primary").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout");
  });

  //Test 2: Guest Checkout
  it("Test 2: As a Guest, I can check out ", () => {
    cy.get("#input-payment-firstname").click();
    cy.get("#input-payment-firstname").type("test");
    cy.get("#input-payment-lastname").type("test");
    cy.get("#input-payment-email").type("test@test.com");
    cy.get("#input-payment-telephone").type("5555555555");
    cy.get("#input-payment-address-1").click();
    cy.get("#payment-address > div:nth-of-type(2)").click();
    cy.get("#input-payment-address-1").type("867 fake street");
    cy.get("#input-payment-city").click();
    cy.get("#payment-address > div:nth-of-type(4) > div").click();
    cy.get("#input-payment-city").type("made up");
    cy.get("#input-payment-postcode").click();
    cy.get("#input-payment-postcode").dblclick();
    cy.get("#input-payment-postcode").type("12345");
    cy.get("#button-save").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/confirm");
    cy.get("#button-confirm").click();
    cy.location("href").should("eq", "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success");
  });
});
