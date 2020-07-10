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
            _this.timerLabel = objects.Scene.timerLabel;
            _this.ms = 0;
            _this.sec = 0;
            _this.min = 0;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager, objects.Game.target);
            // Random target location to spawn
            this.targetX = Math.floor(Math.random() * 750);
            this.targetY = Math.floor(Math.random() * 320);
            this.target = new objects.Target(this.assetManager, objects.Game.target, this.targetX, this.targetY);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            // Time conversions
            this.ms = createjs.Ticker.getTime(true);
            this.sec += Math.floor(this.ms / 1000);
            this.min += Math.floor(this.sec / 60);
            // Reset seconds
            if (this.sec == 60) {
                this.sec = 0;
            }
            ;
            // Timer label
            this.timerLabel.x = 30;
            this.timerLabel.y = 20;
            this.timerLabel.text = this.min + ":" + this.sec + ":" + this.ms;
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.target);
            this.addChild(objects.Scene.timerLabel);
            this.target.on("click", this.targetClick);
        };
        PlayScene.prototype.targetClick = function () {
            // Change from GAME to OVER scene
            objects.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map