class Ball{
constructor(x,y,r){
var options={
'isStatic':false,
'friction':0.3,
'restitution': 0.5,
'density': 1.2

}
this.body=Bodies.circle(x,y,r,options);
this.radius=r;
World.add(world,this.body);
}
display(){
    var posX =this.body.position.x;
    var posY =this.body.position.y;
      var angle = this.body.angle;
    push ()
    translate(posX,posY)
    rotate (angle)
    ellipseMode(RADIUS);
    fill("red");
    stroke("blue");
    ellipse(0,0,this.radius);
    strokeWeight(4);
    pop();
  


}

bounce(){
    Matter.Body.applyForce(ball.body,this.body.position,{x:95,y:95});

}

}