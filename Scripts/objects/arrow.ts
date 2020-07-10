module objects {
  export class Arrow extends createjs.Bitmap{
    // Variables
    // Constructor
    constructor(assetManager:createjs.LoadQueue, orientation:number = 1, x:number = 0, y:number = 0) {
      super(assetManager.getResult("arrow"));

      this.x = x;
      this.y = y;

      this.scaleX *= orientation * 0.7;
      this.scaleY *= 0.7;

      this.on("mouseover", this.mouseOver);
      this.on("mouseout", this.mouseOut);
    }

    // Methods
    // Event Handlers
    private mouseOver():void {
      this.cursor = "pointer";
      this.alpha = 0.7;
    }

    private mouseOut():void {
      this.alpha = 1.0;
    }
  }
}