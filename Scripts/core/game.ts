(function(){
  // Global variabls
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;

  let assetManager:createjs.LoadQueue;
  let assetManifest: any[];

  let currentScene:objects.Scene;
  let currentState:number;

  assetManifest = [
    {id:"logo", src:"./Assets/logo.png"},
    {id:"target", src:"./Assets/target.png"}
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
    if (currentState != objects.Game.currentScene)
    {
      Main();
    }
    currentScene.Update();
    stage.update();
  }

  function Main() {
    switch(objects.Game.currentScene)
    {
      case config.Scene.START:
        stage.removeAllChildren();
        currentScene = new scenes.StartScene(assetManager);
        stage.addChild(currentScene);
      break;

      case config.Scene.GAME:
        stage.removeAllChildren();
        currentScene = new scenes.StartScene(assetManager);
        stage.addChild(currentScene);
      break;

      case config.Scene.OVER:
        stage.removeAllChildren();
        currentScene = new scenes.StartScene(assetManager);
        stage.addChild(currentScene);
      break;
    }

    currentState = objects.Game.currentScene;
  }

  window.onload = Init;
})