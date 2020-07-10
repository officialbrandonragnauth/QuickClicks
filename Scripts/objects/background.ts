module objects {
  export class Background extends createjs.Bitmap {
    // Variables

    // Constructor
    constructor(assetManager:createjs.LoadQueue, num:number = 1)
    {
      super(assetManager.getResult("background_" + num));
    }
  }
}