# Lottery.js

> JavaScript Lottery.

- [Website](https://shenglian.github.io/-lottery/index_part2.html)

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

### lastMaxNum

- Type: `Number`
- Default: `2`

產生結果前最後轉動的圈數


[⬆ back to top](#getting-started)



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


[⬆ back to top](#getting-started)
