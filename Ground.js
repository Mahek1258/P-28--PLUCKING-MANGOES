class Ground {
    constructor() {
      var options = {
          'isStatic':true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(400,697.5,800,5, options);
      this.width = 800;
      this.height = 5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
