module objects {
  export class Target extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(assetManager:createjs.LoadQueue, num:number = 1, x:number = 0, y:number = 0) {
      super(assetManager.getResult("target_" + num));

      this.x = x;
      this.y = y;
      this.scaleX = 0.2;
      this.scaleY = 0.2;

      this.on("click", this.onClick);
    }

    private onClick():void {
      console.log("CLICKED");
      createjs.Ticker.paused = true;
    }
  }
}