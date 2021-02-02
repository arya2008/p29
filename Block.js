class block{
    constructor(x,y,width,height){
    var options={
        restitution:0.1,
        friction:0.1,
        isStatic=false
    }
    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    World.add(world,this.body)
}
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}