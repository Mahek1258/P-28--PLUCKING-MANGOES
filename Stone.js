class Stone{
    constructor(x, y, radius) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2,
            'isstatic': false,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius , this.radius);
        pop();
      }
}