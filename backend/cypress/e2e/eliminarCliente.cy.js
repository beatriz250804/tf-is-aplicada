describe('Eliminar Cliente', () => {
  it('debería eliminar un cliente', () => {

    // entrar a la pantalla de login
    cy.visit('/login');

    // escribir el usuario y la contraseña
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    // entrar al menu de entidades
    cy.contains('Entidades').click({ force: true });
    //entrar al menu de cliente
    cy.contains('Cliente').click({ force: true });

    // buscamos el cliente que se llame así
    cy.contains('table tr', 'Cliente Cypress') // ← Fila donde está el cliente
      .find('button.btn-danger')               // ← Botón rojo "Eliminar"
      .click({ force: true });

    // confirmar que queremos eliminarlo
    cy.get('.modal-footer').contains('Eliminar').click({ force: true });

    // esperar a que se borre
    cy.get('.modal').should('not.exist');

    // comprobamos que ya no existe ese cliente
    cy.contains('table', 'Cliente Cypress').should('not.exist');
  });
});
