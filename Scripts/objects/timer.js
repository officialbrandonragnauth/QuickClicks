var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Timer = /** @class */ (function (_super) {
        __extends(Timer, _super);
        // Variables
        // Constructor
        function Timer(time, fontSize, fontFamily, fontColor, x, y, isCentered) {
            if (x === void 0) { x = 10; }
            if (y === void 0) { y = 10; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, time, fontSize + " " + fontFamily, fontColor) || this;
            // Set the registration point if true to be in the middle
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            // Set initial position
            _this.x = x;
            _this.y = y;
            _this.text = time;
            return _this;
        }
        Timer.prototype.Update = function () {
            this.tick();
        };
        Timer.prototype.tick = function () {
            this.text = "" + createjs.Ticker.getTime(true);
        };
        return Timer;
    }(createjs.Text));
    objects.Timer = Timer;
})(objects || (objects = {}));
//# sourceMappingURL=timer.js.map