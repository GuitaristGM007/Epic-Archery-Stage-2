//create the class playerArcher
class ComputerArcher{
//create the constructor
constructor(x, y, w, h, angle){
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.body = Bodies.rectangle(x, y, w, h);
this.angle = angle;
this.image = loadImage("./assets/computerArcher.png");
}
//function to display the object(s)
display(){
//give the condition to make the bow move up
if (keyIsDown(UP_ARROW) && this.angle < 2){
//change the value of angle
this.angle += 0.02;
}
//give the condition to make the bow move down
if (keyIsDown(DOWN_ARROW) && this.angle > 1){
//change the value of angle
this.angle -= 0.02;
}
//declare a sample variable
var place = this.body.position;
//mention the required color to be filled in the object
fill("black");
//create the push function
push();
//translate the positions
translate(place.x, place.y);
//define rotate function
rotate(this.angle);
//define the imageMode of the object
imageMode(CENTER);
//command to display the image
image(this.image, 0, 0, this.w, this.h);
//create the pop function
pop();
}
}
