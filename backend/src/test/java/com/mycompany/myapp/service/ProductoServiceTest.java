package com.mycompany.myapp.service;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class ProductoServiceTest {

    @Test
    void pruebaTexto() {
        String nombre = "Producto";
        assertThat(nombre).startsWith("Pro");
    }
}
