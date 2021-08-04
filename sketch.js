//declare constants for matter.js library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declare necessary variables
var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher, computerArcher;
var playerArrow, computerArrow;
var angle;

//function to setup the game
function setup(){
//create the canvas of required size
canvas = createCanvas(windowWidth-10, windowHeight-10);

//initialize the enginie
engine = Engine.create();
//add the world into engine
world = engine.world;

//set a specific value of the angle
angle = -PI / 4;

//create the playerBase
playerBase = new PlayerBase(300, 385, 180, 150);
//create the computerBase
computerBase = new ComputerBase(1065, 385, 180, 150);

//create the player
player = new Player(285, playerBase.body.position.y - 153, 50, 180);
//create the computerPlayer
computerPlayer = new ComputerPlayer(1050, playerBase.body.position.y - 152, 50, 180);

//create the playerArcher
playerArcher = new PlayerArcher(320, player.body.position.y - 5, 50, 100, angle);
//create the computerArcher
computerArcher = new ComputerArcher(1015, computerPlayer.body.position.y - 10, 50, 100, angle);

//create the playerArrow
playerArrow = new PlayerArrow(playerArcher.x, playerArcher.y, 100, 40);
//create the computerArrow
computerArrow = new ComputerArrow(computerArcher.x, computerArcher.y, 100, 40);
}

//function to draw the objects
function draw(){
//set a suitable color of the canvas
background("purple");

//required text
fill("#FFFF");
textAlign("center");
textSize(40);
text("EPIC ARCHERY", width / 2, 100);

//display playerBase
playerBase.display();
//display computerBase
computerBase.display();

//display player
player.display();
//display computerPlayer
computerPlayer.display();

//display playerArcher
playerArcher.display();
//display computerArcher
computerArcher.display();

//display playerArrow
playerArrow.display();
//display computerArrow
computerArrow.display();

//call the function to soot the playerArrow
shootToPlay();
}
  
//function to shoot the arrows
function shootToPlay(){
//give the condition to shoot the  playerArrow
if (keyCode === 32){
//give the command to shoot the playerArrow
playerArrow.shoot(playerArcher.body.angle);
}
}
