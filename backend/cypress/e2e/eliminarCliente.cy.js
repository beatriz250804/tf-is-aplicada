describe.skip('Eliminar Cliente', () => {
  it('debería eliminar un cliente existente', () => {

    // 1. Login
    cy.visit('/login');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    // 2. Ir a Entidades → Cliente
    cy.contains('Entidades').click({ force: true });
    cy.contains('Cliente').click({ force: true });

    const nombre = 'Cliente Postman Test';

    // 3. Buscar la fila del cliente según el nombre
    cy.contains('td', nombre)
      .parent('tr')
      .within(() => {
        cy.get('.btn-danger').click({ force: true });
      });

    // 4. Confirmar en el popup
    cy.contains('Eliminar').click({ force: true });

    // 5. Esperar recarga de tabla
    cy.wait(1000);

    // 6. Verificar que YA NO existe
    cy.contains(nombre).should('not.exist');
  });
});
