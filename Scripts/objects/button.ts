module objects {
  export class Button extends createjs.Bitmap{
    // Variables
    private label: objects.Label;
    private help:boolean;
    private helpString: string = "Click the target as quickly as possible."
    private box = new createjs.Shape();
    // Constructor
    constructor(assetManager:createjs.LoadQueue, imageString:string, help:boolean = false, x:number = 0, y:number = 0) {
      super(assetManager.getResult(imageString));

      this.x = x;
      this.y = y;

      this.help = help;

      this.on("mouseover", this.mouseOver);
      this.on("mouseout", this.mouseOut);


    }

    // Methods
    // Event Handlers
    private mouseOver():void {
      this.alpha = 0.7;
      this.box.alpha = 0.5;

      // If help box then display help/instructions message
      if (this.help)
      {
        // Help label appears when button is hovered
        this.label = new objects.Label(this.helpString,"20px","Arial","#FFF",275,180,false);
        this.drawBox();

        this.stage.addChild(this.label);
      }
      else { this.cursor = 'pointer'; }
    }

    private mouseOut():void {
      this.alpha = 1.0;
      
      // Remove label box and label
      if (this.help) {
        // Removes the label text and box;
        this.stage.removeChildAt(2);
        this.stage.removeChildAt(1);
      }
    }

    // Draws the box around the label
    private drawBox():void {
      this.box.graphics.beginFill("#000");
      this.box.graphics.drawRect(265,170,350,100);
      this.box.alpha = 0.5;
      this.stage.addChild(this.box);
    }
  }
}