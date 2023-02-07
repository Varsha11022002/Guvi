 var prime=(msg)=> {      
      msg.forEach((ele)=>{          
         if(checkprime(ele)){
             console.log(ele)
         }})       
      }
      
      function checkprime(n){
    for(let j=2;j<n;j++){
             if(n%j==0)           
                return false;            
          }
          
          return true;         
      }
      
      
   prime([2,3,5,4,6,8]) 

_____________________________________________________________
 
// IIFE
    function checkprime(n){
    for(let j=2;j<n;j++)
          {
             if(n%j==0)
             
                    return false;
             
          }
          
          return true;
          
      }
 ( (msg)=> {
      
      msg.forEach((ele)=>{
          
         if(checkprime(ele))
         
             console.log(ele)
         
         
      })    
        
      })  ([2,13,5,17,4,6,8])  
