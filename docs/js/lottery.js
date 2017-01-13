(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document ? factory(global, true) : function (window) {
      if (!window.document) {
        throw new Error('Lottery requires a window with a document');
      }

      return factory(window);
    };
  } else {
    factory(global);
  }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {

    function Lottery(element){
        
        var _this = this;

        _this._parent = element,
        _this._g = _this._parent.querySelectorAll('div'),
        _this._gg = [].slice.call(_this._g);

        _this.classnames = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];

        _this._fps = 1000 / 15;
        _this._slowSpeed = 100;
        _this.callback = null;

        _this._num = 0,
        _this._numTwo = 0,
        _this._lastNum = 0,
        _this._lastMaxNum = 2,

        _this._defaultWidth = 0,
        _this._defaultHeight = 0;

        _this._stop = false,
        _this._resultNum = null;

        _this._isStarting = false;

        _this.init();
    }

    Lottery.prototype = {
        constructor: Lottery,

        init: function(){

            var _this = this;

            _this.addClassNameItems();
            _this.setItemHeight();
            _this.bindEvent();
            _this.doAnimate();
        },

        // 設定 classname
        addClassNameItems: function(){
            var _this = this;

            _this._gg.forEach(function(e, i){
                e.className = 'addcover ' + _this.classnames[i];
            });
        },

        resetAllStatus: function() {
            var _this = this;

            _this._gg.forEach(function(e){
                if (!e.classList.contains('addcover')) {
                    e.classList.add('addcover');
                }
            });
        },

        setItemHeight: function (){
            var _this = this;

            // num
            _this._defaultWidth = Math.round(_this._parent.clientWidth / 4);
            _this._defaultHeight = _this._defaultWidth;

            // child
            _this._gg.forEach(function(e) {
                e.style.width = _this._defaultWidth + 'px';
                e.style.height = _this._defaultHeight + 'px';
            });

            // parent
            _this._parent.style.height = _this._defaultHeight * 4 + 'px';
        },

        bindEvent: function (){
            var _this = this;
            var _setItemHeight = _this.setItemHeight.bind(this);

            window.addEventListener('resize', _setItemHeight, false);
        },

        doAnimateAjax: function (_resultNum, _lastNum){
            var _this = this;

            // index 從 1 開始
            var _index = +(_this._resultNum);

            (function animateTwo() {

                if (_this._numTwo > _index - 1) {
                    
                    _this.resetSetting();
                    _this.callback === null ? null : _this.callback();
                    return;
                }

                _this.resetAllStatus();
                _this._gg[_this._numTwo].classList.remove('addcover');

                _this._numTwo++;      

                setTimeout(function() {
                    requestAnimationFrame(animateTwo);
                }, _this._fps + _this._slowSpeed * _lastNum);

            })();
        },

        doAnimate: function(){

            var _this = this;

            if (_this._isStarting === true) {
                return;   
            } else {
                _this._isStarting = true;
            }

            (function animate() {

                if (_this._num > 11) {

                    _this._num = 0;

                    if (_this._stop === true) {
                        _this._lastNum++;
                    }

                    if (_this._lastNum > _this._lastMaxNum) {
                        _this.doAnimateAjax(_this._resultNum, _this._lastNum);
                        return;
                    }
                }

                _this.resetAllStatus();
                _this._gg[_this._num].classList.remove('addcover');

                _this._num++;

                setTimeout(function() {
                    requestAnimationFrame(animate);
                }, _this._fps + _this._slowSpeed * _this._lastNum);

            })();

        },

        resetSetting: function(){
            var _this = this;

            _this._isStarting = false;
            _this._lastNum = 0;
            _this._resultNum = null;
            _this._numTwo = 0;
            _this._stop = false;
        },

        setResultItem: function(num, callback){
            var _this = this;
            _this._resultNum = num;
            _this.callback = callback;
        },

        setCircleNum: function(num){
            var _this = this;
            _this._lastMaxNum = num;
        },

        stop: function(){
            var _this = this;
            _this._stop = true;
        }
    };

    var _Lottery = window.Lottery;

    Lottery.noConflict = function () {
        window.Lottery = _Lottery;
        return Lottery;
    };


    if (typeof define === 'function' && define.amd) {
        define('lottery', [], function () {
          return Lottery;
        });
    }


    if (!noGlobal) {
        window.Lottery = Lottery;
    }

    return Lottery;

});