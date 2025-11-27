package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.ClienteTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ClienteTest {

    @Test
    //prueba que el metodo equals funcione bien
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Cliente.class);
        Cliente cliente1 = getClienteSample1();
        Cliente cliente2 = new Cliente();
        //comprueba que estos dos clientes no sean el mismo
        assertThat(cliente1).isNotEqualTo(cliente2);

        //ponemos el ID del cliente 1 al cliente 2
        cliente2.setId(cliente1.getId());
        //ahora si deberian ser el mismo cliente, ya que tendrán mismo id
        assertThat(cliente1).isEqualTo(cliente2);

        cliente2 = getClienteSample2();
        assertThat(cliente1).isNotEqualTo(cliente2);
    }
}
