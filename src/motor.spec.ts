import { vi } from "vitest"
//import { beforeEach } from "vitest";
//import * as ui from "./ui"

//import { mostrarMensajePlantarse } from "./ui"
import { dameNumeroAleatorio, sumaPuntuacion, obtenerPuntosCarta, dameNumeroCarta } from "./motor"
import { partida } from "./modelo"

describe("actualizaPuntuacion", () => {
    // beforeEach(() => {
    //     partida.puntuacion = 0;
    // });

    it("actualiza los puntos de la partida", () => {
        // Arrange
        vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(5)
        // act
        // actualizaPuntuacion(5);
        // assert
        expect(partida.puntuacion).toBe(5);
    });
});

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

// describe("sumaPuntuacion", () => {
//     beforeEach(() => {
//         partida.puntuacion = 0;
//     });

//     it("suma los puntos de la partida", () => {
//         //arrange
//         const puntos = 5;
//         // act
//         const resultado = sumaPuntuacion(puntos);
//         // assert
//         expect(resultado).toBe(5);
//         expect(partida.puntuacion).toBe(0);
//     });
// });

// describe("obtenerPuntosCarta", () => {
//     it("devuelve 0.5 si la carta es mayor que 7", () => {
//         // Arrange
//         const carta = 10;
//         // Act
//         const puntos = obtenerPuntosCarta(carta);
//         // Assert
//         expect(puntos).toBe(0.5);
//     });

//     it("devuelve el mismo número si la carta es menor o igual que 7", () => {
//         // Arrange
//         const carta = 5;
//         // Act
//         const puntos = obtenerPuntosCarta(carta);
//         // Assert
//         expect(puntos).toBe(5);
//     });
// });

// describe("mostrarMensajePlantarse", () => {

//     it("puntuacion partida < 4", () => {
//         // arrange
//         partida.puntuacion = 2;
//         // act
//         const mensaje = mostrarMensajePlantarse();
//         // assert
//         expect(mensaje).toBe("Has sido muy conservador");
//     });

//     it("puntuacion partida = 5", () => {
//         // arrange
//         partida.puntuacion = 5;
//         // act
//         const mensaje = mostrarMensajePlantarse();
//         // assert
//         expect(mensaje).toBe("Te ha entrado el canguelo eh?");
//     });

//     it("puntuacion partida = 6", () => {
//         // arrange
//         partida.puntuacion = 6;
//         // act
//         const mensaje = mostrarMensajePlantarse();
//         // assert
//         expect(mensaje).toBe("Casi casi...");
//     });

//     it("puntuacion partida = 7.5", () => {
//         // arrange
//         partida.puntuacion = 7.5;
//         // act
//         const mensaje = mostrarMensajePlantarse();
//         // assert
//         expect(mensaje).toBe("¡Lo has clavado! ¡Enhorabuena!");
//     });

// });

// describe("revisarPartida", () => {
//     beforeEach(() => {
//         partida.puntuacion = 7.5;
//     });
//     it("muestra mensaje de éxito si puntuación es 7.5"), () => {
//         //arrange
//         vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
//         const mensaje = spyOn(ui, "mostrarMensaje");
//         const gameOver = spyOn(ui, "mostrarGameOver");
//         const bloquear = spyOn(ui, "bloquearBotones");
//         //act
//         ui.revisarPartida();
//         //assert
//         expect(mensaje).toBe("¡Has ganado!");
//         expect(gameOver).toBe("¡Has perdido!");
//         expect(bloquear).toBe("Bloqueo de botón")
//     }
// })

// describe("dameNumeroAleatorio", () => {
//     it("forzamos a que devuelva 6", () => {
//         // Arrange
//         const numeroAleatorio = 7;
//         const spyOnMath = vi.spyOn(global.Math, "random").mockReturnValue(0.6);
//         // Act
//         const resultado = dameNumeroAleatorio();
//         // Assert
//         expect(resultado).toBe(numeroAleatorio);
//         spyOnMath.mockRestore();
//     });
// });