//create the class for computerArrows
class PlayerArrow{
//create the constructor
constructor(x, y, w, h){
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
//define behaviour
var options = {
isStatic : true,
restitution : 0.8,
friction : 1,
density : 1
};
//create the body for object(s)
this.body = Bodies.rectangle(x, y, w, h, options);
//add the image to the object(s)
this.image = loadImage("./assets/arrow.png");
//add the object(s) in the World
World.add(world, this.body);
}
//function to shoot the object(s)
shoot(){
//declare a sample variable and make the object constant with the angle of bow
var sample = p5.Vector.fromAngle(playerArcher.angle); 
//multiply the velocity
sample.mult(27.5);
//set the static state of object(s)
Matter.Body.setStatic(this.body, false);
//set the velocity of the object(s)
Matter.Body.setVelocity(this.body, {x : velocity.x, y : velocity.y});
}
//function to display the object
display(){
//declare variable for angle
var angle = this.body.angle;
//declare a sample variable
var place = this.body.position;
//create the push function
push();
//translate the values
translate(place.x, place.y);
//rotation of angle
rotate(angle);
//define imageMode
imageMode(CENTER);
//create a specific image's blueprint
image(this.image, 0, 0, this.w, this.h)
//create the pop function
pop();
}
}
    