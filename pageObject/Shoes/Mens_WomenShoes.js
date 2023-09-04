export class Mens_WomenShoes {
    webLocators = {
      qtyInput: '[data-val-required="The Qty field is required."]',
      addToCartBtn: '[class="button-1 add-to-cart-button"]',
      termsOfservice: '#termsofservice',
      checkOut: '[class="button-1 checkout-button"]',
    };
  
    pageMethods = {
      qtyInput: () => cy.get(this.webLocators.qtyInput),
      addToCartBtn: () => cy.get(this.webLocators.addToCartBtn),
      termsOfservice: () => cy.get(this.webLocators.termsOfservice),
      checkOut: () => cy.get(this.webLocators.checkOut),
    };
  }
  