

function knightsMoves(inicio, destino) {
    let queue = [{ pos: inicio, dist: 0 }];
    let visitados = new Set();
    let padres = new Map(); // Para rastrear el camino

    padres.set(inicio.toString(), null);

    while (queue.length > 0) {
        let actual = queue.shift();
        let actualPos = actual.pos;
        let actualDist = actual.dist;

        if (actualPos[0] === destino[0] && actualPos[1] === destino[1]) {

            console.log('El camino se logro en '+actualDist+' movimientos:');
            let arrayPath = reconstruirCamino(padres,destino);
            arrayPath.forEach(moves => {
                console.log('['+moves+']');
            });
            return 0;
        }

        visitados.add(actualPos.toString());

        knightMove(actualPos).forEach(moves => {
            if (!visitados.has(moves.toString())) {
                queue.push({ pos: moves, dist: actualDist + 1 });
                visitados.add(moves.toString());
                padres.set(moves.toString(), actualPos); // Rastrear el padre
            }
        });
    }

    console.log('No se encontro un camino');
    return -1; 
}



function knightMove(posicion) {
    const movimientoCaballo = [
        { posX: 2, posY: 1 }, { posX: 1, posY: 2 },
        { posX: -1, posY: 2 }, { posX: -2, posY: 1 },
        { posX: -2, posY: -1 }, { posX: -1, posY: -2 },
        { posX: 1, posY: -2 }, { posX: 2, posY: -1 }
    ];

    let movimientosPermitidos = [];

    movimientoCaballo.forEach(moves => {

        let coordenada = {
            x: moves.posX + posicion[0],
            y: moves.posY + posicion[1]
        };


        if (coordenada.x >= 0 && coordenada.x < 8 && coordenada.y >= 0 && coordenada.y < 8) {
            movimientosPermitidos.push([coordenada.x,coordenada.y]);
        }

    });

    movimientosPermitidos.forEach(moves => {
      //  console.log('moves --> ' + moves);

    });

    return movimientosPermitidos;

}

function reconstruirCamino(padres, destino) {
    let camino = [];
    let paso = destino;

    while (paso) {
        camino.push(paso);
        paso = padres.get(paso.toString());
    }

    camino.reverse();
    return camino;
}




knightsMoves([3, 3], [4, 3]);
