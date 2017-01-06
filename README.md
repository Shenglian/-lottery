# Lottery.js

> JavaScript Lottery.

- [Website](https://shenglian.github.io/-lottery/index_part2.html)

## Getting started

### Quick start

include lottery.js and lottery.css

```html
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
  document.querySelector('.lottery-number')
);
```

## Polyfill
```js
// 有使用 requestAnimationFrame ， 這是當沒有支援時候的 Polyfill 
// handle multiple browsers for requestAnimationFrame()
window.requestAFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
            };
})();

// handle multiple browsers for cancelAnimationFrame()
window.cancelAFrame = (function () {
    return window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            };
})();

```

## Methods

```js

var _lottery = new Lottery(
  document.querySelector('.lottery-number')
);

_lottery.doAnimate();
_lottery.setCircleNum(_circle);
_lottery.setResultItem(_result);
_lottery.stop();

```

### setCircleNum(circleValue)
- **circleValue**:
  - Type: `Number`

設定最後轉動圈數

### setResultItem(resultItemNum)
- **resultItemNum**:
  - Type: `Number`

設定最後產生結果

### doAnimate()

啟動抽獎

### stop()

停止轉動




## License

[MIT](http://opensource.org/licenses/MIT) © [Sheng](https://github.com/Shenglian)

[⬆ back to top](#getting-started)
