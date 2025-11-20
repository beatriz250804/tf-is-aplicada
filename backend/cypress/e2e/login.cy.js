describe('Login por API', () => {
  it('debería iniciar sesión correctamente usando la API', () => {
    cy.request('POST', '/api/authenticate', {
      username: 'admin',
      password: 'admin'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id_token).to.exist;
    });
  });
});
