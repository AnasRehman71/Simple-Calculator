#! /usr/bin/env node
import inquirer from "inquirer";

// printing a welcome message
console.log("welcome to anas / CLI SIMPLE CALCULATOR")


const answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
{message: "enter secondnumber", type:"number",name: "secondnumber"},
{message: "select one of the operator to perform action",
type:"list",
name:"operator",
choices:["Addition","Subtraction","Multiplication","Division"],
},
]);

// conditional statement
if (answer.operator ==="Addition") {
console.log( answer.firstnumber + answer.secondnumber);
}
else if (answer.operator ==="Subtraction") {
  console.log( answer.firstnumber - answer.secondnumber);
}
else if (answer.operator ==="Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator ==="Division") {
  console.log(answer.firstnumber / answer.secondnumber)
}
else{
  console.log("invalid input") 
}






















