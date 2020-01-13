class Arectbox{
    constructor(pointA,bodyB){

        var constraintoptions = {
            pointA:pointA,
       bodyB:bodyB,
    

        }
      //  this.body = Bodies.rectangle(75,height-125,60,30, options);
        this.cannon = Constraint.create(constraintoptions);
     /*   this.width = width;
        this.height = height;
        World.add(world, this.body);*/
        World.add(world,this.cannon);
    };

    attach(body){
        this.cannon.pointA = body;
    }

    shoot(){
        this.cannon.pointA = null;
    }



}   