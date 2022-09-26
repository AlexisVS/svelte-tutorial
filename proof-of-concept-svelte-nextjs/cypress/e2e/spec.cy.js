const setUp = () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Pokedex').click();
}

describe('Test the application', () => {
    it('should enter in pokedex app', function () {
        setUp()
        cy.url().should('equal', 'http://localhost:3000/pokedex')
    });

    it('should show pokemon show view', function () {
        setUp()
        cy.contains('charmander').click();
        cy.url().should('include', '/pokedex/4');
    });
});
