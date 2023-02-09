class person{
constructor(firstname='',lastname='',city='',state='',country='',age='',occupation=''){
this.firstname=firstname;
this.lastname=lastname;
this.city=city;
this.state=state;
this.country=country;
this.age=age;
this.occupation=occupation;
}
setFirstname(firstname)
{
	this.firstname=firstname;
}
getFirstname()
{
	return `FirstName is ${this.firstname}`
}

setLastname(lastname)
{
	this.lastname=lastname;
}
getLastname()
{
	return `lastname is ${this.lastname}`
}
setCity(city)
{
	this.city=city;
}
getCity()
{
	return `city is ${this.city}`
}
setState(state)
{
	this.state=state;
}
getState()
{
	return `state is ${this.state}`
}
setCountry(country)
{
	this.country=country;
}
getCountry()
{
	return `Country is ${this.country}`
}
setAge(age)
{
	this.age=age;
}
getAge()
{
	return `age is ${this.age}`
}
setOccupation(occupation)
{
	this.occupation=occupation;
}
getOccupation()
{
	return `occupation is ${this.occupation}`
}
}


var p1=new person();
p1.setFirstname('Varsha')
p1.setLastname('C')
p1.setAge(20)
p1.setCity('Coimbatore')
p1.setState('Tamilnadu')
p1.setCountry('India')
p1.setOccupation('student')
console.log(p1.getFirstname())
console.log(p1.getLastname())
console.log(p1.getCity())
console.log(p1.getState())
console.log(p1.getCountry())
console.log(p1.getAge())
console.log(p1.getOccupation())
/* console.log(p1) */


