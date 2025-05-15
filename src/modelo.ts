export type EstadoPartida = 'POR_DEBAJO_MAXIMO' | "JUSTO_MAXIMA" | "TE_HAS_PASADO";

interface Partida {
    puntuacion: number;
    estadoPartida: EstadoPartida;
}

export const partida: Partida = {
    puntuacion: 0,
    estadoPartida: 'POR_DEBAJO_MAXIMO',
}