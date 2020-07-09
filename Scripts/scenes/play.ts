module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private target: objects.Target;
    private timerLabel: objects.Label;

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
      this.background = new objects.Background(this.assetManager);
      
      // Random target location to spawn
      this.targetX = Math.floor(Math.random() * 800);
      this.targetY = Math.floor(Math.random() * 420);
      this.target = new objects.Target(this.assetManager, 1, this.targetX, this.targetY);
      this.timerLabel = new objects.Label("", "32px", "Arial", "#FFF",30,10);

      this.Main();
    }

    public Update():void{
      this.ms = createjs.Ticker.getTime(true);
      this.sec = Math.floor(this.ms / 1000);
      this.min = Math.floor(this.sec / 60);
      this.timerLabel.text = this.min + ":" + this.sec + ":" + this.ms;
    }

    public Main():void{
      this.addChild(this.background);
      this.addChild(this.target);
      this.addChild(this.timerLabel);
    }
  }
}