scene.setBackgroundColor(7)
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

const cell = 9;
const cellmargin = 2;
const celldot = 4;
const lego = image.create(i.width * cell, i.height * cell)
for(let x = 0; x < i.width; ++x) {
    for (let y = 0; y < i.height; ++y) {
        const c = i.getPixel(x, y);
        if (!c) continue;
        // paint lego image
        const lx = x * (cell - 1);
        const ly = y * (cell - 1);
        // inside        
        lego.fillRect(lx, ly, cell, cell, c)
        // outline
        lego.drawRect(lx, ly, cell, cell, 0xf)
        // dots
        const cdot = (c + 1) % 0xf
        lego.setPixel(lx + cellmargin, ly + cellmargin,  cdot)
        lego.setPixel(lx + cellmargin, ly + cellmargin + celldot,  cdot)
        lego.setPixel(lx + cellmargin + celldot, ly + cellmargin,  cdot)
        lego.setPixel(lx + cellmargin + celldot, ly + cellmargin + celldot,  cdot)
    }
}

let mySprite = sprites.create(lego)