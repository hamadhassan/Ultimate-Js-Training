////Practice problem -02
////Chapter-02 Problem-01
let num=prompt("Enter your age ")
num=Number.parseInt(num)
if(num>=10 && num <=20){
  console.log("Your age is between 10 and 20")
}
else{
  console.log("Your age is not between 10 and 20")
}
////Chapter-02 Problem-02

const n=Number.parseInt(num)
switch(n){
  case 10:
    console.log("Your age is 10")
    break;
  default:
  console.log("Your age is ", n)
    break;
}
////Chapter-02 Problem-03
if(num%2==0){
  console.log("Number is divisible by 2")
}
else if(num%3==0){
  console.log("Number is divisible by 3")
}
else{
  console.log("Number is divisible by 2 and 3")
}
////Chapter-02 Problem-04
if(num%2==0 || num%3==0){
  console.log("Number is divisible by 2 or 3")
}
else{
  console.log("Number is divisible by 2 and 3")
}
////Chapter-02 Problem-05
let msg=undefined
num>18? msg="you can drive":msg="you cannot drive"
console.log(msg)