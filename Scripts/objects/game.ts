module objects {
  export class Game {
    // GLOBAL VARIABLES
    public static stage: createjs.Stage;
    public assetManager: createjs.LoadQueue;
    public static currentScene: number;
    public static target: number = 1;
  }
}