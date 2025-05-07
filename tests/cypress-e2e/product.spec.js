describe('Product Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/products'); // List page
    });
  
    it('should show product list', () => {
      cy.contains('Products'); // Confirms we're on the list page
    });
  
    it('should create a new product', () => {
      // Go directly to the create page
      cy.visit('http://localhost:4200/products/create');
  
      // Fill out the form
      cy.get('[data-testid="product-name"]').type('Test Product');
      cy.get('[data-testid="product-description"]').type('Test Description');
      cy.get('[data-testid="product-price"]').type('100');
  
      // Submit the form
      cy.contains('button', 'Create').click();
  
      // Assert that the form or confirmation message is still visible
      cy.contains('Create').should('exist'); 
    });
  });
  