class Bob
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic :true,
            restitution:0.3,
            friction:0.5,
            density:1.2,

         }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png"),
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);

    }

    display()
    {
        
        push()
        imageMode(CENTER);
        image(this.image,150,550,this.width,this.height);
        pop()
    }
}