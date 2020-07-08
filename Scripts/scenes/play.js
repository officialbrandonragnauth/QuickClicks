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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            this.targetX = Math.floor(Math.random() * 800);
            this.targetY = Math.floor(Math.random() * 420);
            this.target = new objects.Target(this.assetManager, 1, this.targetX, this.targetY);
            createjs.Ticker.reset();
            createjs.Ticker.on("tick", this.Update);
            this.timerLabel = new objects.Label("", "14px", "Arial", "#000");
            this.timerLabel.text = "" + createjs.Ticker.getTime(true);
            this.Main();
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.target);
            this.addChild(this.timerLabel);
        };
        PlayScene.prototype.Update = function () {
            this.num = createjs.Ticker.getTime(true);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map