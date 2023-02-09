function median(arr1,arr2)
{
	arr3=arr1.sort()
  arr4=arr2.sort()
  /* console.log(arr3,arr4) */
  let value1=arr1[arr1.length-1]
  let value2=arr2[0]
  console.log((value1+value2)/2)
}

 
 median([3,4,1,2],[8,6,4,5])
_____________________________________________________

(function (arr1,arr2)
{
	arr3=arr1.sort()
  arr4=arr2.sort()
  /* console.log(arr3,arr4) */
  let value1=arr1[arr1.length-1]
  let value2=arr2[0]
  console.log((value1+value2)/2)
})([3,4,1,2],[8,6,4,5])
