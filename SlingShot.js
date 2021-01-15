class SlingShot{

    constructor(bodyA,pointB){

        var options={

            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10

        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling= Cons.create(options);
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){

        this.sling.bodyA=null;
    }

    display(){

        if(this.sling.bodyA){

            var Apos= this.sling.bodyA.position;
            var Bpos= this.pointB;
        
            strokeWeight(4);
            line(Apos.x,Apos.y,Bpos.x,Bpos.y);
        }
    }
}