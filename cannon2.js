class Cannon2{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,

        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        World.add(world, this.body);
    };

    display(){
        var pos = this.body.position;
        if(keyIsDown(LEFT_ARROW) && angle > -55){
            angle = angle - 5;            
        }
        if(keyIsDown(RIGHT_ARROW) && angle < 0){
            angle = angle + 5;            
        }
        push();
        fill(255);
        translate(pos.x, pos.y);
        rotate(angle);
        pop();
        fill(255);



        arc(70, height - 90, 90, 100, 180, 360);


        rect(20, height-85, 100, 20);
        rect(20, height-65, 100, 20);
     
                                                                                                                                                

       }
}   