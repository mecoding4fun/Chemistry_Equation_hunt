class Ball{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/bird.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    };




display(){
    //this.body.position.x = mouseX;
  //  this.body.position.y = mouseY;

    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,120,height-125,10,10);
   //console.log(mouse.x);
    
   //image(this.image,0,0,this.width,this.height);
    pop();
    // if(this.body.velocity.x > 10 && this.body.position.x > 200){
    //     var position = [this.body.position.x, this.body.position.y];

    
    // }
    


        }
    }