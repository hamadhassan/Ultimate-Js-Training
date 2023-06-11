let arr=[10,11,12,13]
//for each is used when to perform operation 
arr.forEach((value)=>{
console.log(value)
});
//map create new array and return it
arr.map((value,index,arr)=>{
  console.log(value,index,arr)
})
//filter method return an array 
let arr2=arr.filter((a)=>{
  return a<=10
})
console.log(arr2)
//reduce method return a value
let arr3=arr.reduce((h1,h2)=>{
  return h1+h2
})
console.log(arr3)
const sumFunc(h1,h2)=>{
  return h1+h2
}
arr.reduce(sumFunc);
console.log(arr3)

