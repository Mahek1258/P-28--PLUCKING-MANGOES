class String{
    constructor(bodyA,pointB){
    var option={
        bodyA: bodyA,
        pointB:pointB,
        stiffness:0.04,
        length: 10
    }
    this.pointB = pointB;
    this.string = Constraint.create(option);
    World.add(world,this.string);
}
fly(){
    this.string.bodyA = null;
}

display(){
    var pointA = this.string.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}

