module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private target: objects.Target;
    private timerLabel: objects.Label = objects.Scene.timerLabel;

    private ms:number = 0;
    private sec:number = 0;
    private min:number = 0;

    private targetX: number;
    private targetY: number;

    // Constructor
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }
    // Methods
    public Start():void{
      this.background = new objects.Background(this.assetManager, objects.Game.target);
      
      // Random target location to spawn
      this.targetX = Math.floor(Math.random() * 750);
      this.targetY = Math.floor(Math.random() * 320);
      this.target = new objects.Target(this.assetManager, objects.Game.target, this.targetX, this.targetY);

      this.Main();
    }

    public Update():void{
      // Time conversions
      this.ms = createjs.Ticker.getTime(true);
      this.sec += Math.floor(this.ms / 1000);
      this.min += Math.floor(this.sec / 60);
      
      // Reset seconds
      if (this.sec == 60) { this.sec = 0 };

      // Timer label
      this.timerLabel.x = 30;
      this.timerLabel.y = 20;
      this.timerLabel.text = this.min + ":" + this.sec + ":" + this.ms;
    }

    public Main():void{
      this.addChild(this.background);
      this.addChild(this.target);
      this.addChild(objects.Scene.timerLabel);

      this.target.on("click", this.targetClick);
    }

    public targetClick():void {
      // Change from GAME to OVER scene
      objects.Game.currentScene = config.Scene.OVER;
    }
  }
}