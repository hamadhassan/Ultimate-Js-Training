////Practice problem set -05
////Chapter-05 Problem-01
let arr=[]
// for(let i=0;i<5;i++){
//   arr.push(Number.parseInt(prompt("Enter the Number")))
// }
// console.log(arr)
////Chapter-05 Problem-2
// let num
// while(num!=0){
//   num=Number.parseInt(prompt("Enter the Number"))
//   arr.push(num)
// }
// console.log(arr)
////Chapter-05 Problem-3
let arr1=[10,20,30,40,412]
// let arr2=arr1.filter((a)=>{
//   if(a%10==0){
//     return a
//   }
// })
// console.log(arr2)
////Chapter-05 Problem-4
let arr3=arr1.map((a)=>{
  return a*a
})
console.log(arr3)
////Chapter-05 Problem-5
let num=arr1.reduce((x1,x2)=>{
  return x1*x2
})
console.log(num)

