var count=0;
const countvalue=document.getElementById('countervalue');
function handleChange(type){
    if(type==='decrement' && count>0)   
        count--; 
     else if(type==='increment')
        count++;

    changeValue(count);
    
}

function changeValue(value=0)
{
    countvalue.innerText=value;
    console.log(value);
    
}