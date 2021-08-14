const Engine= Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world, backgroundImg, rand;
var drops=[]
//var snow= new Snow(30,40)

var maxSnow= 150;
function preload(){
  backgroundImg= loadImage("snow2.jpg")
}
function setup() {
  createCanvas(2000,800);
  bg= createSprite(400, 400, 50, 50);
  bg.addAnimation("background", backgroundImg)
  
if(frameCount% 60=== 0){
for(var i=0; i<maxSnow; i=i+1){
 // drops.push(new Snow(Math.round(random(0,400)) , Math.round(random(0,400))))
}
}

}
  


function draw() {
  background(255,255,255);  
 // snow.showSnowfall()
  for(var i = 0; i<maxSnow; i++)
  //{ drops[i]. showSnowfall(); drops[i].updateY() }
  drawSprites();
}