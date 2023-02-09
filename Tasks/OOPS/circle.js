class circle
{
constructor(radius= 1.0,color ='red')
{
	this.radius=radius;
  this.color=color;
}
getRadius()
{
	return `Radius is : ${this.radius}`

}
setRadius(radius)
{
	this.radius=radius
}
getColor()
{
	return `Color is ${this.color}`

}
setColor(color)
{
	this.color=color
}
toString()
{
	return `The radius is ${this.radius} and the color is ${this.color}`

}
getArea()
{
	let area=(3.14*this.radius*this.radius);
	return `Area is ${area}`;
}
getCircumference()
{
	let circumference=(2*3.14*this.radius);
	return `Circumference is ${circumference}`;
}

}

var c1=new circle()
var c2=new circle(3)
var c3=new circle(2,'green')
c1.setRadius(7)
c1.setColor('pink')
console.log(c3.getRadius())
console.log(c3.getColor())
console.log(c1.getArea())
console.log(c1.getCircumference())
console.log(c2.toString())
/* console.log(c,c1) */
