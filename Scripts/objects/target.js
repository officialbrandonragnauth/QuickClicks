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
    var Target = /** @class */ (function (_super) {
        __extends(Target, _super);
        // Variables
        // Constructor
        function Target(assetManager, num, x, y) {
            if (num === void 0) { num = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult("target_" + num)) || this;
            _this.x = x;
            _this.y = y;
            _this.scaleX = 0.2;
            _this.scaleY = 0.2;
            _this.on("click", _this.onClick);
            return _this;
        }
        Target.prototype.onClick = function () {
            console.log("CLICKED");
            createjs.Ticker.paused = true;
        };
        return Target;
    }(createjs.Bitmap));
    objects.Target = Target;
})(objects || (objects = {}));
//# sourceMappingURL=target.js.map