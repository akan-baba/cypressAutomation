export class MobilePhones {

    webLocators = {
      dropDown:'[class="valid"]',
      qtyInput:'[aria-label="Enter a quantity"]',
      addToCartBtn:'[class="button-1 add-to-cart-button"]',
      termsOfservice:'#termsofservice',
      checkOut:'[class="button-1 checkout-button"]'



    }

    pageMethods = {
       dropDown: () => cy.get(this.webLocators.dropDown),
       qtyInput: () => cy.get(this.webLocators.qtyInput),
       addToCartBtn: () => cy.get(this.webLocators.addToCartBtn),
       termsOfservice: () => cy.get(this.webLocators.termsOfservice),
       checkOut: () => cy.get(this.webLocators.checkOut)

    }
}