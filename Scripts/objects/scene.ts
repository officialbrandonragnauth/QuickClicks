module objects {
  export class Scene extends createjs.Container {
    // Variables
    public assetManager: createjs.LoadQueue;
    public static timerLabel: objects.Label = new objects.Label("", "32px", "Arial", "#FFF",30,10);
    // Constructor
    constructor(assetManager:createjs.LoadQueue)
    {
      super();
      this.assetManager = assetManager;
    }
    // Methods
    public Start():void {}
    public Update():void {}
    public Main(): void {}
  }
}