var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload=function(){
var data=JSON.parse(this.responseText);
data.forEach((ele)=>{
console.log(ele.name.common,ele.region,ele.population,ele.subregion)
})
}
