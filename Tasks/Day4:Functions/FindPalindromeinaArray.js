function palindrome(word){
var arr=[]
var rev;
	for(let i=0;i<word.length;i++)
  {
  	
  	let a=word.split("");
    rev=a.reverse();
    rev=rev.join("");    
   }
   if(word===rev)
    	console.log(word);
  
}

var input=["malayalam","mom","spiderman","batman"]
input.forEach((ele)=>
{
	palindrome(ele)
})

 _______________________________________________
 ANONYMOUS FNCT
 
var palindrome=function(word){
var arr=[]
var rev;
	for(let i=0;i<word.length;i++)
  {
  	
  	let a=word.split("");
    rev=a.reverse();
    rev=rev.join("");    
   }
   if(word===rev)
    	console.log(word);
  
}

var input=["malayalam","mom","spiderman","batman"]
input.forEach((ele)=>
{
	palindrome(ele)
})

 
 ________________________________________________________
 
 ARROW FNCT
 var palindrome=(word)=>{
var arr=[]
var rev;
	for(let i=0;i<word.length;i++)
  {
  	
  	let a=word.split("");
    rev=a.reverse();
    rev=rev.join("");    
   }
   if(word===rev)
    	console.log(word);
  
}

var input=["malayalam","mom","spiderman","batman"]
input.forEach((ele)=>
{
	palindrome(ele)
})

 
 
