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

    const movimientoCaballo = [
        { posX: 2, posY: 1 }, { posX: 1, posY: 2 },
        { posX: -1, posY: 2 }, { posX: -2, posY: 1 },
        { posX: -2, posY: -1 }, { posX: -1, posY: -2 },
        { posX: 1, posY: -2 }, { posX: 2, posY: -1 }
    ];

    let movimientosPermitidos = [];

       movimientoCaballo.forEach(moves => {
       
        let coordenada = {
            x : moves.posX + inicio[0],
            y : moves.posY + inicio[1]
        };


        if (coordenada.x >= 0 && coordenada.x < 8 && coordenada.y >= 0 && coordenada.y < 8) {
            movimientosPermitidos.push(coordenada.x+','+coordenada.y);
        }

       });

       movimientosPermitidos.forEach(moves => {
        console.log('moves --> '+ moves);
       });



}

function movimientoValido(movimiento)
{
    if (movimiento[0] < 0 || movimiento[1] < 0 || movimiento[0] > 7 || movimiento[1] > 7) {
        console.log('Movimiento fuera del tablero  : '+movimiento);

        return false;
    };
    console.log('Movimiento válido : '+movimiento);
    return true;

      
}

knightsMoves([6, 3], [4,2]);