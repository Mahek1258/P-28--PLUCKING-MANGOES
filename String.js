class String{
    constructor(bodyA,pointB){
    var option={
        bodyA: bodyA,
        pointB:pointB,
        stiffness:0.004,
        length: 10
    }
    this.pointB = pointB;
    this.string = constrant.create(options);
    World.add(world,this.string);
}
display(){
    var pointA = this.string.bodyA.position;
    var pointB = this.string.pointB.position;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}

