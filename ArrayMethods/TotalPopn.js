var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload=function(){
var data=JSON.parse(this.responseText);
var popn=[]
data.forEach((ele)=>{
	popn.push(ele.population)
})
const total=popn.reduce((t,n)=>t+n)
/* console.log(popn) */
console.log(`The total population is : ${total}`)



}
