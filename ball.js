class Ball {
    constructor(x, y, radius){
        var option ={
          frictionAir:0.005,
          density:1.5,
        }
        this.body = Bodies.circle(x,y,radius/2,option);
        this.width = radius;
        this.height = radius;
        World.add(world,this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.width,this.height);
        pop();
      }
}