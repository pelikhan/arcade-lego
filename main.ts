/**
 * Utilitities to make LEGO images
 */
//% icon="\uf24d"
namespace lego {
    /**
     * Sets the default LEGO moulding colors
     */
    //% blockId=legosetpalette block="lego set moulding colors palette"
    export function setMouldingColorsPalette() {
        scene.setBackgroundColor(7);
        const buffer = color.ColorBuffer.fromBuffer(
            hex`
        000000
        ffffff
        ff0000
        EE9DC3
        ff6600
        F7CE46
        478CC6
        00cc00
        0000ff
        68c3e2
        990066
        a06eb9
        cda4de
        F5C189
        A83D15
        000000
            `
            , color.ColorBufferLayout.RGB);
        palette.setColors(buffer)
    }

    /**
     * Expands an image into a LEGO rendering
     */
    //% blockId=legolegoify block="lego brickify $i"
    export function brickify(i: Image) {
        const cell = 9;
        const cellmargin = 2;
        const celldot = 4;
        const l = image.create(i.width * cell, i.height * cell)
        for(let x = 0; x < i.width; ++x) {
            for (let y = 0; y < i.height; ++y) {
                const c = i.getPixel(x, y);
                if (!c) continue;
                // paint lego image
                const lx = x * (cell - 1);
                const ly = y * (cell - 1);
                // inside        
                l.fillRect(lx, ly, cell, cell, c)
                // outline
                l.drawRect(lx, ly, cell, cell, 0xf)
                // dots
                const cdot = (c + 1) % 0xf
                l.setPixel(lx + cellmargin, ly + cellmargin,  cdot)
                l.setPixel(lx + cellmargin, ly + cellmargin + celldot,  cdot)
                l.setPixel(lx + cellmargin + celldot, ly + cellmargin,  cdot)
                l.setPixel(lx + cellmargin + celldot, ly + cellmargin + celldot,  cdot)
            }
        }    
        return l;    
    }

    /**
     * Creates a cursor sprite to explore the LEGO rendering
     */
    //% blockId=legoshowcursor block="lego show cursor"
    export function showCursor() {
        const c = sprites.create(img`
            8 8 8 . . . 8 8 8
            8 9 . . 9 . . 9 8
            8 . . . 6 . . . 8
            . . . . . . . . .
            . 9 6 . 9 . 6 9 .
            . . . . . . . . .
            8 . . . 6 . . . 8
            8 9 . . 9 . . 9 8
            8 8 8 . . . 8 8 8
        `)
        controller.moveSprite(c)
        scene.cameraFollowSprite(c)
    }

    scene.setBackgroundColor(7);
    setMouldingColorsPalette();
}