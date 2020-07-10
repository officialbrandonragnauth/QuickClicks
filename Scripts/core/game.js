(function () {
    // Global variabls
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    assetManifest = [
        { id: "arrow", src: "./Assets/arrow.png" },
        { id: "background_1", src: "./Assets/background_1.png" },
        { id: "background_2", src: "./Assets/background_2.png" },
        { id: "background_3", src: "./Assets/background_3.png" },
        { id: "background_4", src: "./Assets/background_4.png" },
        { id: "background_5", src: "./Assets/background_5.png" },
        { id: "help", src: "./Assets/help.png" },
        { id: "logo", src: "./Assets/logo.png" },
        { id: "mainmenu", src: "./Assets/mainmenu.png" },
        { id: "replay", src: "./Assets/replay.png" },
        { id: "start", src: "./Assets/start.png" },
        { id: "target_1", src: "./Assets/target_1.png" },
        { id: "target_2", src: "./Assets/target_2.png" },
        { id: "target_3", src: "./Assets/target_3.png" },
        { id: "target_4", src: "./Assets/target_4.png" },
        { id: "target_5", src: "./Assets/target_5.png" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
        if (createjs.Ticker.getTime(true) >= 1000) {
            createjs.Ticker.reset();
            createjs.Ticker.on("tick", Update);
        }
    }
    function Main() {
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                createjs.Ticker.reset();
                createjs.Ticker.on("tick", Update);
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map