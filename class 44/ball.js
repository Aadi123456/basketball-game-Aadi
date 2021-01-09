class Ball{
constructor(x,y,radius)
{
var options={
'restitution':0.8,
'friction':1.0,
'density':1
}
this.body=Bodies.circle(x,y,radius,options);
this.image=loadImage("basketball.png");
this.radius=radius;
World.add(world,this.body);
}
display(){
  console.log(this.body.position.x);
  console.log(this.body.position.y);
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      
      
    image(this.image,0,0,this.radius,this.radius);

pop ();
}
Scorefunction(){
  if(this.body.velocity.x===0 && this.body.velocity.y===0 && this.body.position.x>800 && this.body.position.y>400){
score= score+1;
this.body.position.x = 400;
this.body.position.y = 400;
//this.body.velocity.x = 0;
//this.body.velocity.y = 0;
//Matter . Body . setPosition(this.body,{x:400,y:400})
console.log("game over");
World.remove(world,this.body);
  }
}
}