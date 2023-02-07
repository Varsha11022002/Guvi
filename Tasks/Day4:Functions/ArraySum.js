var sum=(function(msg){
      let sum=0;
      msg.forEach((ele)=>{
          sum +=ele;
      })
      console.log(sum)
      
      })
      
      sum([1,2,3,4,5])
______________________________________________________
IIFE
(function(msg){
      let sum=0;
      msg.forEach((ele)=>{
          sum +=ele;
      })
      console.log(sum)
      
      })([1,2,3,4])

__________________________________________________________
// ARROW FUNCTION
var sum=(msg)=>{
      let sum=0;
      msg.forEach((ele)=>{
          sum +=ele;
      })
      console.log(sum)
      
      }
      
      sum([1,2,3,4,5])
