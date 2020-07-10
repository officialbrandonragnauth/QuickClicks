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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructors
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.timerLabel = objects.Scene.timerLabel;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager, 1);
            this.replay = new objects.Button(this.assetManager, "replay", false, 342, 290);
            this.mainmenu = new objects.Button(this.assetManager, "mainmenu", false, 342, 368);
            this.congrats = new objects.Label("CONGRATULATIONS!", "48px", "Arial", "#FFF", 460, 100, true);
            this.timerLabel.x = 400;
            this.timerLabel.y = 200;
            this.replay.on("click", this.replayButtonClick);
            this.mainmenu.on("click", this.menuButtonClick);
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.replay);
            this.addChild(this.mainmenu);
            this.addChild(this.congrats);
            this.addChild(this.timerLabel);
        };
        GameOverScene.prototype.replayButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.menuButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map