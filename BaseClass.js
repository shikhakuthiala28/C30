class BaseClass{

    constructor(x,y,width,height){

        var options={

            isStatic:true,
            friction:0.5,
            density:0.8,
            restitution:1
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        this.image=loadImage("base.png");
        World.add(world,this.body);
    }

    show(){

        var pos=this.body.position;
        var angle= this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop ();
    }

    present(){

        var pos=this.body.position;
        var angle= this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop ();


    }

}