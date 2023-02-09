class Uberprice{
constructor(distance='',vehicle='')
{
	this.distance=distance;
  this.vehicle=vehicle;
  this.basefare=25;
  this.gst=60
  this.priceforonekm=10
  

}
setDistance(distance)
{
	this.distance=distance;
}

getDistance()
{
return `Distance is ${this.distance}`
}
setVehicle(vehicle)
{
	this.vehicle=vehicle;
}
getVehicle()
{
return `Vehicle is ${this.vehicle}`
}
getPrice()
{
	if(this.vehicle=="bike")
  {
  	if(this.distance<=4)
    {
    	return `Pay Rs.${this.basefare}`
    }
    else
    {
    	let price=this.basefare+(this.distance-4)*this.priceforonekm+this.gst
    	return `Pay Rs.${price}`
    }
  }
  if(this.vehicle=="auto")
  {
  	if(this.distance<=4)
    {
    	this.basefare=this.basefare+20
    	return `Pay Rs.${this.basefare}`
    }
    else
    {
    this.basefare=this.basefare+20
    	this.basefare=this.basefare+(this.distance-4)*this.priceforonekm+this.gst
    	return `Pay Rs.${this.basefare}`
    }
  }
  if(this.vehicle=="car")
  {
  	if(this.distance<=4)
    {
    	this.basefare=this.basefare+40
    	return `Pay Rs.${this.basefare}`
    }
    else
    {
    this.basefare=this.basefare+40
    	this.basefare=this.basefare+(this.distance-4)*this.priceforonekm+this.gst
    	return `Pay Rs.${this.basefare}`
    }
  }
}

}

var c1=new Uberprice();
c1.setDistance(10)
c1.setVehicle("car")
console.log(c1.getVehicle())
console.log(c1.getDistance())
console.log(c1.getPrice())
