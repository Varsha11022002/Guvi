function remove(arr)
 {
 	let a=[...new Set(arr)];
  return a;
 }
 
 console.log(remove(["happy","good","morning","good","noon","happy","sun","happy","good"]))

______________________________________________________________________________
( function (arr)
 {
   let a=[...new Set(arr)];
  console.log(a)
 })
 
 (["happy","good","morning","good","noon","happy","sun","happy","good"])
 
 _________________________________________________________________________________

 var remove=(arr)=>{
 var a=[];
 
 arr.forEach((ele)=>
 {
     if(!a.includes(ele))
      	a.push(ele)
 })
	console.log(a)
  }
 
 
 remove(["happy","good","morning","good","noon","happy","sun","happy","good"])

/* let unique=arr.filter((a,index)=>
{
  return(arr.indexOf(a)!==index)
})
 
 console.log(unique)
  */
/*  var a=[]
 arr.forEach((ele)=>
 {
     if(!a.includes(ele))
      a.push(ele)
 })
 
 console.log(a) */
 
 
