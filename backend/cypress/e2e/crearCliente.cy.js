describe('Crear Cliente', () => {
  it('debería crear un nuevo cliente', () => {
    cy.visit('/');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    cy.contains('Entities').click();
    cy.contains('Cliente').click();

    cy.contains('Create a new Cliente').click();

    cy.get('#field_nombre').type('Cliente Cypress');
    cy.get('#field_email').type('cypress@test.com');

    cy.contains('Save').click();

    cy.contains('Cliente Cypress').should('exist');
  });
});
