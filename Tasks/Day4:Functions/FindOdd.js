function findOdd(arr){
for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2!=0)
            {
                console.log(arr[i])
            }
        }
}

findOdd([1,2,3,4,5,6,7,8,9])
____________________________________________________________
var findodd=(arr)=>{
       for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2!=0)
            {
                console.log(arr[i])
            }
        }
    }
    
    findodd([0,1,2,3,4,5,6,7,8,9,10])
__________________________________________________________________

IIFE
((arr)=>{
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2!=0)
            {
                console.log(arr[i])
            }
        }
    }
    )([0,1,2,3,4,5,6,7,8,9,10])
