function remove(arr)
 {
 	let a=[...new Set(arr)];
  return a;
 }
 
 console.log(remove(["happy","good","morning","good","noon","happy","sun","happy","good"]))

______________________________________________________________________________

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
 
 