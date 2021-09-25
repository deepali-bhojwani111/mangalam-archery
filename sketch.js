const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
// player base
 
// computerbase
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  // computerarcher

  // call function handlecomputerarcher

  }
function draw() {
  background(backgroundImg);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //creating arrows
   // creating arrows
  for (var i = 0; i < playerArrows.length; i++) {
    showArrows(i, playerArrows);
  }
  // display playerbase, player,playerlife and call function for handleArrowColision
  playerBase.display();
  player.display();
  player.life();
  playerArcher.display();
  handlePlayerArrowCollision();



  // create arrows for computer arrows

 
  // display compurterbase,computer,computerlife,computerArcher and call function for handlecomputerarrowcollision
  
}
// function keypressed

// function keyrealeased

// function showArrows


function handleComputerArcher() {
  if (!computerArcher.collapse && !playerArcher.collapse) {
    setTimeout(() => {
      var pos = computerArcher.body.position;
      var angle = computerArcher.body.angle;
      var moves = ["UP", "DOWN"];
      var move = random(moves);
      var angleValue;

      if (move === "UP" && computerArcher.body.angle < 1.67) {
        angleValue = 0.1;
      }else{
          angleValue = -0.1;
      }
      if(move === "DOWN" && computerArcher.body.angle > 1.47) {
        angleValue = -0.1;
      }else{
          angleValue = 0.1;
      }
      
      angle += angleValue;

      var arrow = new ComputerArrow(pos.x, pos.y, 100, 10, angle);

      Matter.Body.setAngle(computerArcher.body, angle);
      Matter.Body.setAngle(computerArcher.body, angle);

      computerArrows.push(arrow);
      setTimeout(() => {
        computerArrows[computerArrows.length - 1].shoot(angle);
      }, 100);

      handleComputerArcher();
    }, 2000);
  }
}

//  function handle playerArcher


