var HurdleImg,Hurdle,hurdlesGroup;
var RockImg,Rock,rocksGroup;
var RoadImg,Road;
var runningboyImg,runningboy;
var Running_2Img,Running_2;
var gameState="play";


function preload(){
    HurdleImg=loadImage("Hurdle.png");
    RockImg=loadImage("Rock.png");
    RoadImg=loadImage("Road.png");
    runningboyImg=loadImage("runningboy.jpg");
    Running_2Img=loadImage("Running_2.jpg");
    
}

function setup() {
    createCanvas(600, 600);
    road = createSprite(300,300);
    road.addImage("road",roadImg);
    road.velocityX = 1;
    rocksGroup=new Group();
  runningboy=createSprite(200,200,50,50);
  runningboy.scale=0.3;
  runningboy.addImage("runningboy",runningboyImg);
 
}

function draw() {
    if (gameState === "play") {
        if(keyDown("left_arrow"))
        { runningboy.y = runningboy.y - 3; } 
        if(keyDown("right_arrow"))
        { runningboy.y = runningboy.y + 3; }
         if(keyDown("space"))
         { runningboy.velocityX = -10; }
          runningboy.velocityX = runningboy.velocityx + 0.8

          if(road.x > 400){
            road.x=300
          }
          spawnHurdles();
          if(rocksGroup.isTouching(runningboy))
          {
            runningboy.velocityX=0;
          }
          if(HurdleGroup.isTouching(runningboy)|| runningboy.x >600){
            runningboy.destroy();
            gameState = "end";}
            drawSprites();
          }
          if(gameSate === "end"){
            stroke("yellow");
            fill("yellow");
            textSize(30);
            text("Game Over,230,250");
          }
}

function spawnHurdles(){
    if(frameCount%240===0){
        var hurdle = createSprite(200, -50);
        var rock = createSprite(200,10);
        hurdle.y= Math.round(random(120,400));
        rock.x = hurdle.x;
        hurdle.addImage(hurdleImg);
        rock.addImage(rockImg);
        hurdle.velocitX=1;
        rock.velocityX=1;
        runningboy.depth=hurdle.depth;
        runningboy.depth+=1;
        hurdle.lifetime=800;
        rock.lifetime=800;

        hurdlesgroup.add(hurdle);
        rocksGroup.add(rock);

    }
}