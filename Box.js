class Box extends BaseClass {
  constructor(x, y) {
    ;
    super(x,y,50,60);
    Matter.Body.setStatic(this.body, false);
    this.visibilty=255;
    
  }
  display(){

    if(this.body.speed<3){
      super.show();      
    }  
    else{
      World.remove(world,this.body);
      push (); 
      this.visibility=this.visibility-10;
      tint(255,this.visibility);
      pop ();
     
    }
  }
};
