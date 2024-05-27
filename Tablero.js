
class Tablero {

    constructor() {
        this.tablero =
            [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            ];

    }

    printTablero()
    {
        console.log("   0 1 2 3 4 5 6 7");
        console.log("  +-----------------+");
        for (let i = 0; i < this.tablero.length; i++) {
          let fila = (7 - i) + " | " + this.tablero[i].join(' ') + " |";
          console.log(fila);
        }
        console.log("  +-----------------+");
        console.log("   0 1 2 3 4 5 6 7");
      }

    
}

export default Tablero;