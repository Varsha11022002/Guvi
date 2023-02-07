ANONYMOUS FNCT
  var title= function(msg){
      
      var input=msg;
     
      for(let i=0;i<=input.length;i++)
      {
         
          console.log(input[i][0].toUpperCase()+input[i].substr(1).toLowerCase())
      }
      
      }

title(["Batman","superman","sPIDERman"])


IIFE
 (function(msg){
      
      var input=msg;
     
      for(let i=0;i<=input.length;i++)
      {
         
          console.log(input[i][0].toUpperCase()+input[i].substr(1).toLowerCase())
      }
      
      })(["Batman","superman","sPIDERman"])

ARROW FNCT
 var title= (msg)=>{
      
      var input=msg;
     
      for(let i=0;i<=input.length;i++)
      {
         
          console.log(input[i][0].toUpperCase()+input[i].substr(1).toLowerCase())
      }
      
      }

title(["Batman","superman","sPIDERman"])
