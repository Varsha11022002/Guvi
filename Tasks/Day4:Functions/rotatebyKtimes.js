ANONYMOUS FNCT
var rotate=function(arr,k){
var a=[];
for(let i=k-1;i<arr.length;i++)
{
	a.push(arr[i]);
  
}
for(let i=0;i<k-1;i++)
{
	a.push(arr[i]);
}

return a
}

console.log(rotate([31,32,33,34,35],2))
__________________________________________________

IIFE
(function(arr,k){
var a=[];
for(let i=k-1;i<arr.length;i++)
{
	a.push(arr[i]);
  
}
for(let i=0;i<k-1;i++)
{
	a.push(arr[i]);
}

console.log(a)
}
)([31,32,33,334,35],2)

_______________________________________________________
ARROW FNCT

var rotate=(arr,k)=>{
var a=[];
for(let i=k-1;i<arr.length;i++)
{
	a.push(arr[i]);
  
}
for(let i=0;i<k-1;i++)
{
	a.push(arr[i]);
}

console.log(a)
}
rotate([371,382,393,334,305],4)
