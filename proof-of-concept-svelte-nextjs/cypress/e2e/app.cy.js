describe('Test the application page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.contains('Pokedex').click();
    })
    it('should enter in pokedex app', function () {
        cy.url().should('equal', 'http://localhost:3000/pokedex')
    });

    it('should show pokemon show view', function () {
        cy.contains('charmander').click();
        cy.url().should('include', '/pokedex/4');
    });
});
