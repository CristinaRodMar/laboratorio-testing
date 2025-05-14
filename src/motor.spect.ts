import { vi } from "vitest"
import { beforeEach } from "vitest";
import * as ui from "./ui"

import { mostrarMensajePlantarse } from "./ui"
import {dameNumeroAleatorio, actualizaPuntuacion, sumaPuntuacion, obtenerPuntosCarta} from "./motor"
import { partida } from "./modelo"

describe("actualizaPuntuacion", () => {
    beforeEach(() => {
        partida.puntuacion = 0; 
    });

    it("actualiza los puntos de la partida", () => {
      // act
        actualizaPuntuacion(5);
      // assert
        expect(partida.puntuacion).toBe(5);
    });
});

describe("sumaPuntuacion", () => {
    beforeEach(() => {
        partida.puntuacion = 0; 
    });

    it("suma los puntos de la partida", () => {
    //arrange
        const puntos = 5;
    // act
        const resultado = sumaPuntuacion(puntos);
    // assert
        expect(resultado).toBe(5);
        expect(partida.puntuacion).toBe(0);
    });
});

describe("obtenerPuntosCarta", () => {
    it("devuelve 0.5 si la carta es mayor que 7", () => {
    // Arrange
        const carta = 10;
    // Act
        const puntos = obtenerPuntosCarta(carta);
    // Assert
        expect(puntos).toBe(0.5);
    });

    it("devuelve el mismo número si la carta es menor o igual que 7", () => {
    // Arrange
        const carta = 5;
    // Act
        const puntos = obtenerPuntosCarta(carta);
    // Assert
        expect(puntos).toBe(5);
    });
});

describe("mostrarMensajePlantarse", () => {

    it("puntuacion partida < 4", () => {
        // arrange
        partida.puntuacion = 2;
        // act
        const mensaje = mostrarMensajePlantarse();
        // assert
        expect(mensaje).toBe("Has sido muy conservador");
    });

    it("puntuacion partida = 5", () => {
        // arrange
        partida.puntuacion = 5;
        // act
        const mensaje = mostrarMensajePlantarse();
        // assert
        expect(mensaje).toBe("Te ha entrado el canguelo eh?");
    });

    it("puntuacion partida = 6", () => {
        // arrange
        partida.puntuacion = 6;
        // act
        const mensaje = mostrarMensajePlantarse();
        // assert
        expect(mensaje).toBe("Casi casi...");
    });

    it("puntuacion partida = 7.5", () => {
        // arrange
        partida.puntuacion = 7.5;
        // act
        const mensaje = mostrarMensajePlantarse();
        // assert
        expect(mensaje).toBe("¡Lo has clavado! ¡Enhorabuena!");
    });

});

describe("revisarPartida", () => {
    beforeEach(() => {
        partida.puntuacion = 7.5;
    });
    it("muestra mensaje de éxito si puntuación es 7.5"), () => {
        //arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
        const mensaje = spyOn(ui, "mostrarMensaje");
        const gameOver = spyOn(ui, "mostrarGameOver");
        const bloquear = spyOn(ui, "bloquearBotones");
        //act
        ui.revisarPartida();
        //assert
        expect(mensaje).toBe("¡Has ganado!");
        expect(gameOver).toBe("¡Has perdido!");
        expect(bloquear).toBe("Bloqueo de botón")
    }
})

describe("dameNumeroAleatorio", () => {
    it("forzamos a que devuelva 6", () => {
        // Arrange
        const numeroAleatorio = 7;
        const spyOnMath = vi.spyOn(global.Math, "random").mockReturnValue(0.6);  
        // Act
        const resultado = dameNumeroAleatorio();  
        // Assert
        expect(resultado).toBe(numeroAleatorio);  
        spyOnMath.mockRestore();
    });
});
