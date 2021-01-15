class Polygon extends BaseClass{

    constructor(x,y){

        super(x,y,25,25);
        this.image=loadImage("polygon.png");
        Matter.Body.setStatic(this.body, false);
        
    }

    display(){
        
       super.present();
        
    }
}