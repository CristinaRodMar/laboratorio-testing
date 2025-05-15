import { vi } from "vitest"
import { dameNumeroAleatorio, sumaPuntuacion, obtenerPuntosCarta, dameNumeroCarta, obtenerEstadoPartida } from "./motor"
import { partida, EstadoPartida } from "./modelo"

describe("obtenerPuntosCarta", () => {
    it("Debería devolver 0.5 porque es mayor que 7", () => {
      // Arrange
        const carta = 8;
        const valorEsperado = 0.5;
      // Act
        const resultado = obtenerPuntosCarta(carta);
      // Assert
        expect(resultado).toBe(valorEsperado);
    });
    it("Debería devolver 5 porque es menor que 7", () => {
        // Arrange
        const carta = 5;
        const valorEsperado = 5;
        // Act
        const resultado = obtenerPuntosCarta(carta);
        // Assert
        expect(resultado).toBe(valorEsperado);
    });
    it("Debería devolver 3 porque es menor que 7", () => {
        // Arrange
        const carta = 3;
        const valorEsperado = 3;
        // Act
        const resultado = obtenerPuntosCarta(carta);
        // Assert
        expect(resultado).toBe(valorEsperado);
    });
    it("Debería devolver 0.5 porque es mayor que 7", () => {
        // Arrange
        const carta = 9;
        const valorEsperado = 0.5;
        // Act
        const resultado = obtenerPuntosCarta(carta);
        // Assert
        expect(resultado).toBe(valorEsperado);
    });
});

describe('sumaPuntuacion', () => {
    it('Debería devolver 5, cuando los puntos son 4', () => {
        // Arrange
        const resultadoEsperado = 5;

        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(1);

        // Act
        const resultado = sumaPuntuacion(4);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver 10, cuando los puntos son 5', () => {
        // Arrange
        const resultadoEsperado = 10;

        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(5);

        // Act
        const resultado = sumaPuntuacion(5);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver 7, cuando los puntos son 6', () => {
        // Arrange
        const resultadoEsperado = 7;

        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(1);

        // Act
        const resultado = sumaPuntuacion(6);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver 4, cuando los puntos son 2', () => {
        // Arrange
        const resultadoEsperado = 4;

        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(2);

        // Act
        const resultado = sumaPuntuacion(2);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })
})

describe('dameNumeroAleatorio', () => {
    it('Debería devolver un 5, cuando el número aleatorio es un 0.4', () => {
        // Arrange
        const resultadoEsperado = 5;
        vi.spyOn(Math, 'random').mockReturnValue(0.4);

        // Act
        const resultado = dameNumeroAleatorio();

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    })

    it('Debería devolver un 3, cuando el número aleatorio es un 0.2', () => {
        // Arrange
        const resultadoEsperado = 3;
        vi.spyOn(Math, 'random').mockReturnValue(0.2);

        // Act
        const resultado = dameNumeroAleatorio();

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    })

    it('Debería devolver un 7, cuando el número aleatorio es un 0.6', () => {
        // Arrange
        const resultadoEsperado = 7;
        vi.spyOn(Math, 'random').mockReturnValue(0.6);

        // Act
        const resultado = dameNumeroAleatorio();

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})

describe('dameNumeroCarta', () => {
    it('Debería devolver un 10, cuando el número es un 8', () => {
        // Arrange
        const resultadoEsperado = 10;
        const numero = 8;

        // Act
        const resultado = dameNumeroCarta(numero);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver un 5, cuando el número es un 5', () => {
        // Arrange
        const resultadoEsperado = 5;
        const numero = 5;

        // Act
        const resultado = dameNumeroCarta(numero);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver un 2, cuando el número es un 2', () => {
        // Arrange
        const resultadoEsperado = 2;
        const numero = 2;

        // Act
        const resultado = dameNumeroCarta(numero);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver un 6, cuando el número es un 6', () => {
        // Arrange
        const resultadoEsperado = 6;
        const numero = 6;
    
        // Act
        const resultado = dameNumeroCarta(numero);
    
        // Assert
        expect(resultadoEsperado).toBe(resultado);
    });
})

describe('obtenerEstadoPartida', () => {
    it('Debería devolver el estado por debajo máximo, cuando la puntuación, es menor a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'POR_DEBAJO_MAXIMO';
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(4);

        // Act
        const resultado = obtenerEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver el estado justo máxima, cuando la puntuación, es ígual a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'JUSTO_MAXIMA';
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(7.5);

        // Act
        const resultado = obtenerEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('Debería devolver el estado te has pasado, cuando la puntuación, es mayor a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'TE_HAS_PASADO';
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(11);

        // Act
        const resultado = obtenerEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })
})
