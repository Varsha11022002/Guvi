var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload=function(){
var data=JSON.parse(this.responseText);
var popn=data.filter((ele)=>{
 if(ele.population<200000){
 		console.log(`The population in ${ele.name.common} is ${ele.population}`)
 }
})


}
