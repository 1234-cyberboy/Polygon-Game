class Chain{
    constructor(bodyA, pointB){
        var options = {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.5,
         length:10
     }
    this.pointB = pointB;
    this.chain = Constraint.create(options)
    World.add(world, this.chain)
    
    }
    FVH(){
     this.chain.bodyA = null; 
    }
    display(){
       
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        stroke(48,22,8)
        line(pointA.x-25, pointA.y, pointB.x, pointB.y);
        line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-5);
        }
    }
}
