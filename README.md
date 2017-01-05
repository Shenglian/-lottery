# Lottery.js

> JavaScript Lottery.

- [Website](https://shenglian.github.io/-lottery/index_part2.html)

## Table of contents

- [Features](#features)
- [Main](#main)
- [Getting started](#getting-started)
- [Keyboard support](#keyboard-support)
- [Options](#options)
- [Methods](#methods)
- [Events](#events)
- [No conflict](#no-conflict)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)



## Features

- Supports 29 [options](#options)
- Supports 23 [methods](#methods)
- Supports 7 [events](#events)
- Supports modal and inline modes
- Supports touch
- Supports move
- Supports zoom
- Supports rotation
- Supports scale (flip)
- Supports keyboard
- Cross-browser support

## Getting started

### Quick start

```html
<!-- a block container is required -->
<div class="lottery-group">
  <div class="lottery-number">
      <div style="background-image: url('http://www.gratisography.com/pictures/361_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/360_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/338_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/342_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/347_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/350_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/357_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/340_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/342_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/338_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/360_1.jpg')"></div>
      <div style="background-image: url('http://www.gratisography.com/pictures/357_1.jpg')"></div>
  </div>
</div>
```

```js
var _lottery = new Lottery(
  document.querySelector('.lottery-number'),
  {
    lastMaxNum: 5
  }
);
```





## Options

You may set viewer options with `new Viewer(image, options)`.
If you want to change the global default options, You may use `Viewer.setDefaults(options)`.


### lastMaxNum

- Type: `Number`
- Default: `2`

產生結果前最後轉動的圈數

### button

- Type: `Boolean`
- Default: `true`

Show the button on the top-right of the viewer.


### navbar

- Type: `Boolean` or `Number`
- Default: `true`
- Options:
  - `0` or `false`: hide the navbar
  - `1` or `true`: show the navbar
  - `2`: show the navbar only when screen width great then 768 pixels
  - `3`: show the navbar only when screen width great then 992 pixels
  - `4`: show the navbar only when screen width great then 1200 pixels

Specify the visibility of the navbar.


### title

- Type: `Boolean` or `Number`
- Default: `true`
- Options:
  - `0` or `false`: hide the title
  - `1` or `true`: show the title
  - `2`: show the title only when screen width great then 768 pixels
  - `3`: show the title only when screen width great then 992 pixels
  - `4`: show the title only when screen width great then 1200 pixels

Specify the visibility of the title (the current image's name and dimensions).

> The name comes from the `alt` attribute of an image element or the image name parsed from URL.


### toolbar

- Type: `Boolean` or `Number`
- Default: `true`
- Options:
  - `0` or `false`: hide the toolbar
  - `1` or `true`: show the toolbar
  - `2`: show the toolbar only when screen width great then 768 pixels
  - `3`: show the toolbar only when screen width great then 992 pixels
  - `4`: show the toolbar only when screen width great then 1200 pixels

Specify the visibility of the toolbar.


### tooltip

- Type: `Boolean`
- Default: `true`

Show the tooltip with image ratio (percentage) when zoom in or zoom out


### movable

- Type: `Boolean`
- Default: `true`

Enable to move the image.


### zoomable

- Type: `Boolean`
- Default: `true`

Enable to zoom the image.


### rotatable

- Type: `Boolean`
- Default: `true`

Enable to rotate the image.


### scalable

- Type: `Boolean`
- Default: `true`

Enable to scale the image.


### transition

- Type: `Boolean`
- Default: `true`

Enable CSS3 Transition for some special elements.


### fullscreen

- Type: `Boolean`
- Default: `true`

Enable to request full screen when play.

> Requires the browser supports [Full Screen API](http://caniuse.com/fullscreen).


### keyboard

- Type: `Boolean`
- Default: `true`

Enable keyboard support.


### interval

- Type: `Number`
- Default: `5000`

Define interval of each image when playing.


### minWidth

- Type: `Number`
- Default: 200

Define the minimum width of the viewer.

> Only available in inline mode (set the `inline` option to `true`).


### minHeight

- Type: `Number`
- Default: 100

Define the minimum height of the viewer.

> Only available in inline mode (set the `inline` option to `true`).


### zoomRatio

- Type: `Number`
- Default: `0.1`

Define the ratio when zoom the image by wheeling mouse.


### minZoomRatio

- Type: `Number`
- Default: `0.01`

Define the min ratio of the image when zoom out.


### maxZoomRatio

- Type: `Number`
- Default: `100`

Define the max ratio of the image when zoom in.


### zIndex

- Type: `Number`
- Default: `2015`

Define the CSS `z-index` value of viewer in modal mode.


### zIndexInline

- Type: `Number`
- Default: `0`

Define the CSS `z-index` value of viewer in inline mode.


### url

- Type: `String` or `Function`
- Default: `'src'`

Define where to get the original image URL for viewing.

> If it is a string, it should be one of the attributes of each image element.
> If it is a function, it will be called on each image and should return a valid image URL.


### ready

- Type: `Function`
- Default: `null`

A shortcut of the `ready` event.


### show

- Type: `Function`
- Default: `null`

A shortcut of the `show` event.


### shown

- Type: `Function`
- Default: `null`

A shortcut of the `shown` event.


### hide

- Type: `Function`
- Default: `null`

A shortcut of the `hide` event.


### hidden

- Type: `Function`
- Default: `null`

A shortcut of the `hidden` event.


### view

- Type: `Function`
- Default: `null`

A shortcut of the `view` event.


### viewed

- Type: `Function`
- Default: `null`

A shortcut of the `viewed` event.


[⬆ back to top](#table-of-contents)



## Methods

All methods allow chain composition.

As there are some **asynchronous** processes when start the viewer, you should call a method only when it is available, see the following **lifecycle**:

```js
new Viewer(image, {
  ready: function () {
    // 2 methods are available here: "show" and "destroy".
  },
  shown: function () {
    // 9 methods are available here: "hide", "view", "prev", "next", "play", "stop", "full", "exit" and "destroy".
  },
  viewed: function () {
    // All methods are available here except "show".
    this.viewer.zoomTo(1).rotateTo(180);
  }
});
```


### show()

Show the viewer.

> Only available in modal mode.






## License

[MIT](http://opensource.org/licenses/MIT) © [Sheng ](http://chenfengyuan.com)


[⬆ back to top](#table-of-contents)
