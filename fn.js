// function declaration and function expression

 /* function declaration:
 function hello(){
 console.log("Say hello");
 }
 hello(); */

/* function experession:
var hello=function(){
    console.log("Say hello");
}
hello();*/

/*function hello(value){
    console.log("My name is "+ value);
}
hello("preethi")
we can pass argument to the fuction*/

function hello(value){
    return "My name is " +value;
}
let message=hello("Preethi");
console.log(message);

function calculate(value1 ,value2){
    return  value1 +value2;
}
let result=calculate(1,2);
console.log(result);
