 


> Open this page at [https://pelikhan.github.io/arcade-lego/](https://pelikhan.github.io/arcade-lego/)

Renders an image in 2D brick like LEGOs, which makes it easier to rebuild
the image with real bricks.

```blocks
lego.setMouldingColorsPalette()
lego.showCursor()
lego.showBricks(img`
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
`)
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/pelikhan/arcade-lego** and import

## Edit this project ![Build status badge](https://github.com/pelikhan/arcade-lego/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/pelikhan/arcade-lego** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/pelikhan/arcade-lego/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
