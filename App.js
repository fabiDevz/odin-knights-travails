import Tablero from './Tablero.js';

function knightsMoves(inicio, destino) {
    let tablero = new Tablero();

    if (inicio[0] < 0 || inicio[1] < 0 || inicio[0] > 7 || inicio[1] > 7) {
        console.log('Posición de inicio inválida');

        return;
    };

    if (destino[0] < 0 || destino[1] < 0 || destino[0] > 7 || destino[1] > 7) {
        console.log('Posición de destino inválida');

        return;
    };

    tablero.printTablero();

}

knightsMoves([5, 3], [4,2]);