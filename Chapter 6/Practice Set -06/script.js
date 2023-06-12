////Pracice Set-06
////Pracice Set-06 Problem-01,03
// let age=Number.parseInt(prompt("Enter you age"))
// function ageCheckerStatus(){
//   if(age>=18){
//     alert("You can drive")
//   }
//   else if(age<0){
//     console.error("Enter correct age")
//   }
//   else{
//     alert("You can not drive")
//   }
// }

// ////Pracice Set-06 Problem-02
// let status=confirm("Do you want to see the prompt again")
// if(status){
//   ageCheckerStatus();
// }

////Pracice Set-06 Problem-04
// let num=Number.parseInt(prompt("Enter the number"))
// if(num>=4){
//   location.href="https://google.com"
// }
////Pracice Set-06 Problem-04
let number=Number.parseInt(prompt("Enter the 1 for red, 2 for yellow"))
if(number==1){
  document.body.style.background="red"
}
else if(number==2){
  document.body.style.background="yellow"
}
