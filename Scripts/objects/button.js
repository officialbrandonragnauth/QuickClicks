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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // Constructor
        function Button(assetManager, imageString, help, x, y) {
            if (help === void 0) { help = false; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.helpString = "Click the target as quickly as possible.";
            _this.box = new createjs.Shape();
            _this.x = x;
            _this.y = y;
            _this.help = help;
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        // Methods
        // Event Handlers
        Button.prototype.mouseOver = function () {
            this.alpha = 0.7;
            this.box.alpha = 0.5;
            // If help box then display help/instructions message
            if (this.help) {
                // Help label appears when button is hovered
                this.label = new objects.Label(this.helpString, "20px", "Arial", "#FFF", 275, 180, false);
                this.drawBox();
                this.stage.addChild(this.label);
            }
            else {
                this.cursor = 'pointer';
            }
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1.0;
            // Remove label box and label
            if (this.help) {
                // Removes the label text and box;
                this.stage.removeChildAt(2);
                this.stage.removeChildAt(1);
            }
        };
        // Draws the box around the label
        Button.prototype.drawBox = function () {
            this.box.graphics.beginFill("#000");
            this.box.graphics.drawRect(265, 170, 350, 100);
            this.box.alpha = 0.5;
            this.stage.addChild(this.box);
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map