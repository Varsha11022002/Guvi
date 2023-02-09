var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload=function(){
var data=JSON.parse(this.responseText);
data.forEach((ele) => {
    
    for( i in ele.currencies)
    {
        if(i=="USD")
        {
            console.log(`The country ${ele.name.common} has the currency ${ele.currencies[i].name}`)
        }
    }
});

}
