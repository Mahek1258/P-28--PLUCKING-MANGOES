 class Mango{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic': true,
        }
        this.body = Bodies.circle(x, y,30, options);
        this.radius = 30;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
        }
}