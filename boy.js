class boy
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image=loadImage("project 28 img/images/boy.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var boyPos=this.body.position;		
			push()
			translate(boyPos.x, boyPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}