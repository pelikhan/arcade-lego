const i = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 1 5 5 1 . . .
    . . . . . . 1 1 1 1 1 1 . . . .
    . . . . . 1 1 5 5 5 5 5 1 . . .
    . 1 1 1 1 1 5 5 5 5 5 5 5 1 . .
    . 1 2 5 1 5 5 5 5 5 5 5 5 1 . .
    . . 1 5 5 1 5 2 1 f 5 2 2 f . .
    . . 1 2 5 5 1 1 f f 5 2 2 c . .
    1 1 2 1 5 5 5 2 f 2 2 2 2 2 1 .
    1 2 2 c 2 5 5 1 5 2 2 2 2 2 2 1
    8 2 2 2 c c 1 5 5 5 5 5 5 5 1 .
    8 1 2 2 2 2 2 5 5 5 5 5 5 5 1 .
    . 8 2 2 2 2 2 2 5 5 5 5 5 2 1 .
    . . 8 1 2 2 2 2 2 5 5 5 1 1 . .
    . . . 8 8 8 8 8 8 8 8 1 1 . . .
`;
lego.setMouldingColorsPalette()
lego.showCursor()
lego.showBricks(i)
//const l = lego.brickify(i)
//let mySprite = sprites.create(l)