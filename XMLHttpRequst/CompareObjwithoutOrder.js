// Order is Important
// let obj1={name:"Person1",age:5};

// let obj2={age:5,name:"Person1"}

// console.log(JSON.stringify(obj1)===JSON.stringify(obj2)) false

____________________________________________________________________
let obj1={name:"Person1",age:5};

let obj2={age:5,name:"Person1"}

console.log(shallowEqual(obj1,obj2))

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}



