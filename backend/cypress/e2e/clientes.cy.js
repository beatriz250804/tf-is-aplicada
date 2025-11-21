describe('Listado de Clientes', () => {
  it('debería mostrar la página de clientes', () => {

    cy.visit('/login');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    // Si existe menú hamburguesa, lo abrimos
    cy.get('body').then($body => {
      if ($body.find('button.navbar-toggler').length > 0) {
        cy.get('button.navbar-toggler').click();
      }
    });

    // Ahora buscamos Entities
    cy.contains('Entidades').click();

    cy.contains('Cliente').click();

    cy.contains('Cliente').should('exist');
  });
});
