class Box2{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.2,
          'density':0.4
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       // strokeWeight(4);
        //stroke("green");
        fill("green");
       // fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }

else{
  score = score+1;
World.remove(world,this.body);
//push();

//pop();
}
    }
  }