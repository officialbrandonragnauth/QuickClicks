module scenes {
  export class GameOverScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private replay: objects.Button;
    private mainmenu: objects.Button;
    private congrats: objects.Label;
    private timerLabel: objects.Label = objects.Scene.timerLabel;
    // Constructors
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);
      
      this.Start();
    }

    // Method
    public Start():void {
      this.background = new objects.Background(this.assetManager, 1);
      this.replay = new objects.Button(this.assetManager, "replay", false, 342, 290);
      this.mainmenu = new objects.Button(this.assetManager, "mainmenu", false, 342, 368);
      this.congrats = new objects.Label("CONGRATULATIONS!", "48px", "Arial", "#FFF", 460,100,true);
      this.timerLabel.x = 400;
      this.timerLabel.y = 200;

      this.replay.on("click", this.replayButtonClick);
      this.mainmenu.on("click", this.menuButtonClick);

      this.Main();
    }
    public Update():void{}

    public Main():void{
      this.addChild(this.background);
      this.addChild(this.replay);
      this.addChild(this.mainmenu);
      this.addChild(this.congrats);
      this.addChild(this.timerLabel);
    }
    public replayButtonClick():void {
      objects.Game.currentScene = config.Scene.GAME;
    }
    public menuButtonClick():void {
      objects.Game.currentScene = config.Scene.START;
    }
  }
}