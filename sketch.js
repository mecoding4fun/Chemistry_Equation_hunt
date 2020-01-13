const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, cannon,ball,cannon2,shooter;
var moving_bot,bot_img;
var angle = 0;
var A_letter_img,A_letter,A_letter_WRONG,A_letter_CORRECT;
var B_letter_img,B_letter,B_letter_WRONG,B_letter_CORRECT;
var C_letter_img,C_letter,C_letter_WRONG,C_letter_CORRECT;
var H_letter_img,H_letter,H_letter_WRONG,H_letter_CORRECT;
var H_letter_img_second,H_letter_second,H_letter_second_WRONG,H_letter_second_CORRECT;
var O_letter_img,O_letter,O_letter_WRONG,O_letter_second_CORRECT;
var O_letter_img_second,O_letter_second,O_letter_second_WRONG,O_letter_second_CORRECT;
var water_img,water_question;
var score = 40;


function preload() {

  A_letter_img = loadImage("alphabet1.png");

      A_letter_WRONG=loadImage("ALPHABETS WRONG/A.PNG");

          A_letter_CORRECT=loadImage("ALPHABETS CORRECT/A.PNG");

  B_letter_img = loadImage("alphabet2.png");

      B_letter_WRONG=loadImage("ALPHABETS WRONG/B.PNG");

          B_letter_CORRECT=loadImage("ALPHABETS CORRECT/B.PNG");

  C_letter_img = loadImage("alphabet3.png");

    C_letter_WRONG=loadImage("ALPHABETS WRONG/C.PNG");

        C_letter_CORRECT=loadImage("ALPHABETS CORRECT/B.PNG");

  H_letter_img = loadImage("alphabet8.png");

    H_letter_WRONG=loadImage("ALPHABETS WRONG/H.PNG");

      H_letter_CORRECT=loadImage("ALPHABETS CORRECT/H.PNG"); 

  H_letter_img_second = loadImage("alphabet8.png");

     H_letter_second_WRONG=loadImage("ALPHABETS WRONG/H.PNG");

     H_letter_second_CORRECT=loadImage("ALPHABETS CORRECT/H.PNG");

  O_letter_img = loadImage("alphabet15.png");

     O_letter_WRONG=loadImage("ALPHABETS WRONG/O.PNG");

     O_letter_CORRECT=loadImage("ALPHABETS CORRECT/O.PNG");

  O_letter_img_second = loadImage("alphabet15.png");

  O_letter_second_WRONG = loadImage("ALPHABETS WRONG/O.PNG");

  O_letter_second_CORRECT=loadImage("ALPHABETS CORRECT/O.PNG");

  water_img = loadImage("water.png");
 bot_img = loadImage("bird.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  moving_bot = createSprite(85,height-115,40,40);
  moving_bot.addImage("botball",bot_img)



  A_letter = createSprite(width-200,height-120);
  A_letter.addImage("letterA",A_letter_img);
  A_letter.scale = 0.5;
  
  B_letter = createSprite(width-40,height-240);
  B_letter.addImage("letterB",B_letter_img);
  B_letter.scale = 0.5;

  C_letter = createSprite(width-40,height-540);
  C_letter.addImage("letterB",C_letter_img);
  C_letter.scale = 0.5;

  H_letter = createSprite(width-716,height-278);
  H_letter.addImage("letterH",H_letter_img);
  H_letter.scale = 0.5;

  H_letter_second = createSprite(width-716,height-378);
 H_letter_second.addImage("letterh",H_letter_img_second);
  H_letter_second.addAnimation("WRONG",H_letter_second_WRONG);
  H_letter_second.scale = 0.5;
  H_letter_second.debug = true;


  O_letter = createSprite(width-410,height-500);
  O_letter.addImage("letterO",O_letter_img);
  O_letter.scale = 0.5;

  O_letter_second = createSprite(width-410,height-550);
  O_letter_second.addImage("lettero",O_letter_img_second);
  O_letter_second.scale = 0.5;

  water_question= createSprite(100,70);
  water_question.addImage("water", water_img);
  water_question.scale = 0.5;

      ground = new Ground(width/2, height-30,width, 50); 
     cannon2 = new Cannon2(75,height-125,60,30);
      ball = new Ball(width/2,height-125,50,50);
      cannon = new Arectbox({x : 200,y:100},ball.body);
      shooter = new Shooter(75,height-125,60,30);

      // ball.velocity.x = 3;
      // cannon2.debug = true;



  
}

function draw() {
  background(255);
  Engine.update(engine);
  textSize(15);
  text("Score : " + score,width-550,50);
  ground.display();
  //cannon.display();
  cannon2.display();

  //console.log();

  moving_bot.velocity.x = mouseX/160;
  moving_bot.velocity.y = -mouseY/160;

 
  if(moving_bot.isTouching(H_letter_second)){
    score = score - 10;
    moving_bot.x = 85;
    moving_bot.y = height-115;
    moving_bot.velocity.x !=  mouseX/160;;
    moving_bot.velocity.y != -mouseY/160;

    H_letter_second.changeAnimation("WRONG",H_letter_WRONG);
    score = score - 10;
    score = score;



  }
  if (moving_bot.isTouching(C_letter)){
    C_letter.destroy();
    score = score +10;
  }
  if ( moving_bot.x > width || moving_bot.y > height  && mousePressedOver ){
    moving_bot.x = 75;
    moving_bot.y = height-123;
  }
  if (moving_bot.isTouching(A_letter)){
  score = score -10;
  }
  if (moving_bot.isTouching(B_letter)){
    score = score -10;
  }
  if (moving_bot.isTouching(H_letter)){
    score = score -10;
  }
  if (moving_bot.isTouching(O_letter)){
    O_letter.destroy();
    score = score +10;
  }
  if (moving_bot.isTouching(O_letter_second)){
    O_letter_second.destroy();
    score = score +10;
  }

  ball.display();
  water_question.display();
  moving_bot.display();
  H_letter.display();
  H_letter_second.display();
  A_letter.display();
  B_letter.display();
  C_letter.display();
  O_letter.display();
  O_letter_second.display();
  shooter.display();

  cannon.attach(ball.body);


  
}
