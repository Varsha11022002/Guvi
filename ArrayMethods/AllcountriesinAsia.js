var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload=function(){
var data=JSON.parse(this.responseText);
data.filter((ele)=>{
	if(ele.region==="Asia"){
  console.log(`The country in Asia ${ele.name.common}`)
  }
})

}
