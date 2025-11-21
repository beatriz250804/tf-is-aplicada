describe('Crear Cliente', () => {
  it('debería crear un nuevo cliente', () => {
    cy.visit('/login');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    
    cy.contains('Entidades').click({ force: true });
    cy.contains('Cliente').click({ force: true });

    cy.contains('Crear nuevo Cliente').click({ force: true });

    cy.get('#field_nombre').type('Cliente Cypress');
    cy.get('#field_email').type('cypress@test.com');

    cy.contains('Guardar').click();

    cy.contains('Cliente Cypress').should('exist');
  });
});
