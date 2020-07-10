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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.array = [];
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            this.logo = new objects.Logo(this.assetManager, 180, 75);
            this.background = new objects.Background(this.assetManager, 1);
            this.startButton = new objects.Button(this.assetManager, "start", false, 342, 290);
            this.helpButton = new objects.Button(this.assetManager, "help", true, 342, 368);
            this.arrowLeft = new objects.Arrow(this.assetManager, 1, 300, 456);
            this.arrowRight = new objects.Arrow(this.assetManager, -1, 598, 456);
            this.credit = new objects.Label("Brandon Ragnauth - Centennial College - COMP397 - Midterm", "14px", "Arial", "#000", 10, 10, false);
            // Appending target images to array
            for (var i = 0; i <= 5; i++) {
                this.array.push(new objects.Target(this.assetManager, i, 425, 456));
                this.array[i].scaleX *= 0.5;
                this.array[i].scaleY *= 0.5;
            }
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.removeChildAt(6);
            this.removeChildAt(7);
            this.addChildAt(this.array[objects.Game.target], 6);
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.logo);
            this.addChild(this.startButton);
            this.addChild(this.helpButton);
            this.addChild(this.arrowLeft);
            this.addChild(this.arrowRight);
            this.addChildAt(this.array[0], 6);
            this.addChild(this.credit);
            this.startButton.on("click", this.startButtonClick);
            this.arrowLeft.on("click", this.arrowLeftClick);
            this.arrowRight.on("click", this.arrowRightClick);
        };
        StartScene.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.arrowLeftClick = function () {
            // Go back one image
            objects.Game.target--;
            // If reached the furthest left image, go to end image
            if (objects.Game.target == 0) {
                objects.Game.target = 5;
            }
        };
        StartScene.prototype.arrowRightClick = function () {
            // Go forward one image
            objects.Game.target++;
            // If reached the furthest right image, go to first image
            if (objects.Game.target == 6) {
                objects.Game.target = 1;
            }
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map