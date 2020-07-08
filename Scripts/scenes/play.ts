module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private target: objects.Target;
    private timerLabel: objects.Label;
    private num: number;
    private targetX: number;
    private targetY: number;
    // Constructor
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }
    // Methods
    public Start():void{
      this.background = new objects.Background(this.assetManager);
      
      this.targetX = Math.floor(Math.random() * 800);
      this.targetY = Math.floor(Math.random() * 420);
      this.target = new objects.Target(this.assetManager, 1, this.targetX, this.targetY);

      createjs.Ticker.reset();
      createjs.Ticker.on("tick", this.Update);

      this.timerLabel = new objects.Label("", "14px", "Arial", "#000");
      this.timerLabel.text = "" + createjs.Ticker.getTime(true);

      this.Main();
    }

    public Main():void{
      this.addChild(this.background);
      this.addChild(this.target);
      this.addChild(this.timerLabel);
    }

    public Update():void{
      this.num = createjs.Ticker.getTime(true);
    }
  }
}