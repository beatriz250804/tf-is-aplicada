describe('Listado de Clientes', () => {
  it('debería mostrar la página de clientes', () => {
    cy.visit('/');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    cy.contains('Entities').click();
    cy.contains('Cliente').click();

    cy.contains('Cliente').should('exist');
  });
});
