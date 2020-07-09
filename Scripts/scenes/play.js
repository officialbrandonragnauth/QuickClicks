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
            _this.ms = 0;
            _this.sec = 0;
            _this.min = 0;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            // Random target location to spawn
            this.targetX = Math.floor(Math.random() * 800);
            this.targetY = Math.floor(Math.random() * 420);
            this.target = new objects.Target(this.assetManager, 1, this.targetX, this.targetY);
            this.timerLabel = new objects.Label("", "32px", "Arial", "#FFF", 30, 10);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.ms = createjs.Ticker.getTime(true);
            this.sec = Math.floor(this.ms / 1000);
            this.min = Math.floor(this.sec / 60);
            this.timerLabel.text = this.min + ":" + this.sec + ":" + this.ms;
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.target);
            this.addChild(this.timerLabel);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map