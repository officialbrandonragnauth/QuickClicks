module scenes {
  export class StartScene extends objects.Scene {
    // Variables
    private logo: objects.Logo;
    private background: objects.Background;
    private startButton: objects.Button;
    private helpButton: objects.Button;
    
    // Constructor
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Methods
    public Start():void {
      this.logo = new objects.Logo(this.assetManager, 180, 75);
      this.background = new objects.Background(this.assetManager);
      this.startButton = new objects.Button(this.assetManager, "start", false, 342, 300);
      this.helpButton = new objects.Button(this.assetManager, "help", true, 342, 378);
      this.Main();
    }

    public Update():void {}

    public Main():void {
      this.addChild(this.background);
      this.addChild(this.logo);
      this.addChild(this.startButton);
      this.addChild(this.helpButton);
      this.startButton.on("click", this.startButtonClick);
    }

    private startButtonClick():void {
      // Change from START to GAME scene
      objects.Game.currentScene = config.Scene.GAME;
    }
  }
}