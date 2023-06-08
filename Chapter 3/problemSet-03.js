////Practice problem -03
////Chapter-03 Problem-01
let marks={
  harry:98,
  rohan:78,
  aakash:60
}
for(let i=0;i<Object.keys(marks).length;i++){
  console.log(Object.keys(marks)[i] + " marks is "+marks[Object.keys(marks)[i]])
}

////Chapter-03 Problem-02
for(let a in marks){
  console.log(a+" marks is "+marks[a])
}
////Chapter-03 Problem-03
let n=50
while(true){
  let a =prompt("Enter the number")
  a=Number.parseInt(a)
  if(n===a){
    break;
  }
}
// let n=121
// let a
// while(a!=n){
//   a =prompt("Enter the number")
// }

// function mean(a,b,c,d){
//   return a+b+c+d/4
// }
const mean=(a,b,c,d)=>{
  return a+b+c+d/4
}
console.log(mean(1,2,3,4))