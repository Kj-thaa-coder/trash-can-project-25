class Bin{

    constructor(x,y,width,height){
this.x=x;
this.y=y;
this.width = width
this.height = height
var options={isStatic: true}
this.body=Bodies.rectangle(this.x, this.y, width, height,options)


World.add(world, this.body);
this.image = loadImage("sprites/dustbingreen.png");


}
display(){

    push()
    rectMode(CENTER)
    rect(this.x, this.y,this.width,this.height)
    pop()

    }



}