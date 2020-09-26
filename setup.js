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
    fill(0);
    textSize(80);

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            text('P', 80 * i, 80 * j);
        }
    }

}