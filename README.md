# Lottery.js

> JavaScript Lottery.

- [Website](https://shenglian.github.io/-lottery/index_part2.html)

## Getting started

### Quick start

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
