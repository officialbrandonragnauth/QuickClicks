module scenes {
  export class StartScene extends objects.Scene {
    // Variables
    private logo: objects.Logo;
    private background: objects.Background;
    private startButton: objects.Button;
    private helpButton: objects.Button;
    private arrowLeft: objects.Arrow;
    private arrowRight: objects.Arrow;
    private array: Array<objects.Target> = [];
    private credit: objects.Label;
    
    // Constructor
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Methods
    public Start():void {
      this.logo = new objects.Logo(this.assetManager, 180, 75);
      this.background = new objects.Background(this.assetManager, 1);
      this.startButton = new objects.Button(this.assetManager, "start", false, 342, 290);
      this.helpButton = new objects.Button(this.assetManager, "help", true, 342, 368);
      this.arrowLeft = new objects.Arrow(this.assetManager, 1, 300, 456);
      this.arrowRight = new objects.Arrow(this.assetManager, -1, 598, 456);
      this.credit = new objects.Label("Brandon Ragnauth - Centennial College - COMP397 - Midterm", "14px", "Arial", "#000", 10, 10, false);
      
      // Appending target images to array
      for (let i = 0; i <= 5; i++) {
        this.array.push(new objects.Target(this.assetManager, i, 425, 456));
        this.array[i].scaleX *= 0.5;
        this.array[i].scaleY *= 0.5;
      }

      this.Main();
    }

    public Update():void {
      this.removeChildAt(6);
      this.removeChildAt(7);
      this.addChildAt(this.array[objects.Game.target], 6);
    }

    public Main():void {
      this.addChild(this.background);
      this.addChild(this.logo);
      this.addChild(this.startButton);
      this.addChild(this.helpButton);
      this.addChild(this.arrowLeft);
      this.addChild(this.arrowRight);
      this.addChildAt(this.array[0],6);
      this.addChild(this.credit);

      this.startButton.on("click", this.startButtonClick);
      this.arrowLeft.on("click", this.arrowLeftClick);
      this.arrowRight.on("click", this.arrowRightClick);
    }

    public startButtonClick():void {
      // Change from START to GAME scene
      objects.Game.currentScene = config.Scene.GAME;
    }

    public arrowLeftClick():void {
      // Go back one image
      objects.Game.target--;
      // If reached the furthest left image, go to end image
      if(objects.Game.target == 0) { objects.Game.target = 5 }
    }

    public arrowRightClick():void {
      // Go forward one image
      objects.Game.target++;
      // If reached the furthest right image, go to first image
      if(objects.Game.target == 6) { objects.Game.target = 1 }
    }
  }
}