package com.mycompany.myapp.service;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class ClienteServiceTest {

    @Test
    void pruebaSuma() {
        int resultado = 2 + 3;
        assertThat(resultado).isEqualTo(5);
    }
}
