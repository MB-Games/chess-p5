function createBoard() {
    let myCanvas = createCanvas(gameCanvasSize, gameCanvasSize);
    myCanvas.parent("canvas");
    //background('#75a676');
    fill('#f1f7f1');
    noStroke();
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if ((j + i) % 2 == 0) {
                fill('#f1f7f1');
                square(80 * i, 80 * j, 80);
            } else {
                fill('#75a676');
                square(80 * i, 80 * j, 80);
            }
        }
    }
}

function placePieces() {
    // K = King
    // Q = Queen
    // R = Rook
    // B = Bishop
    // P = Pawn
    // N = Knight

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            if (j % 2 == 0) {
                square(64 * i, 64 * j, 64);
            } else {
                square((64 * i) + 64, 64 * j, 64);
            }
        }
    }
    
}