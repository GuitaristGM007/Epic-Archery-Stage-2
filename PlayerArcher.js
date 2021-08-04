//create the class playerArcher
class PlayerArcher{
    //create the constructor
    constructor(x, y, w, h, angle){
    //define properties
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);
    this.angle = angle;
    this.image = loadImage("./assets/playerArcher.png");
    }
    //function to display the object(s)
    display(){
    //give the condition to make the bow move up
    if (keyIsDown(LEFT_ARROW) && this.angle > -2){
    //change the value of angle
    this.angle -= 0.02;
    }
    //give the condition to make the bow move down
    if (keyIsDown(RIGHT_ARROW) && this.angle < -1){
    //change the value of angle
    this.angle += 0.02;
    }
    //mention the required color to be filled in the object
    fill("black");
    //create the push function
    push();
    //translate the positions
    translate(this.x, this.y);
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
