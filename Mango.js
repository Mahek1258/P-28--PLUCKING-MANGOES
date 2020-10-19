class Mango{
    constructor(x, y,) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isstatic': true,
        }
        this.body = Bodies.circle(x, y,20,20, options);
        this.radius = 20;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(this.radius);
        ellipse(0, 0, this.radius,this.radius);
        image(this.image,-35,-50,this.radius+50,this.radius+50);
        pop();
        }
}