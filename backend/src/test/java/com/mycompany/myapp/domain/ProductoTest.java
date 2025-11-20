package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.ClienteTestSamples.*;
import static com.mycompany.myapp.domain.ProductoTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProductoTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Producto.class);
        Producto producto1 = getProductoSample1();
        Producto producto2 = new Producto();
        assertThat(producto1).isNotEqualTo(producto2);

        producto2.setId(producto1.getId());
        assertThat(producto1).isEqualTo(producto2);

        producto2 = getProductoSample2();
        assertThat(producto1).isNotEqualTo(producto2);
    }

    @Test
    void clienteTest() {
        Producto producto = getProductoRandomSampleGenerator();
        Cliente clienteBack = getClienteRandomSampleGenerator();

        producto.setCliente(clienteBack);
        assertThat(producto.getCliente()).isEqualTo(clienteBack);

        producto.cliente(null);
        assertThat(producto.getCliente()).isNull();
    }
}
