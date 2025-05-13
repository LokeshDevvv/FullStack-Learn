// Functions let you:
// - Take arguments as input
// - Return a value as output
// - Be treated as independent programs that do something with given input
// - Accept other functions as input (called callbacks)

// Let's start with a basic function:
// Goal: Take two numbers as input and return their sum

function sum1(a, b) {
    return a + b;
}

const value = sum1(1, 2); // Here the function is called
console.log("Sum using sum1:", value); // Output: Sum using sum1: 3

// Let's talk about callback functions:
// A callback is a function passed into another function to be executed later.

// Modified sum function that accepts a callback
function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result); // Call the passed-in function with the result
}

// Two possible callback functions to display the result
function displayResult(data) {
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is: " + data);
}

// You are only allowed to call one function after this line.
// We choose which display function to use by passing it as an argument.
sum(1, 2, displayResult); // Only one function call, satisfying the condition

//Lets build something better with this concept 
function docalu(a,b,option){
    const ans = option(a,b);
    return ans;
}
function sum2(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log("The sum is :"+ docalu(3,4,sum2));
console.log("The sub is :"+ docalu(3,4,sub))
//Set timeout 
function greet(){
    console.log("Greet!! the time taken is 10sec ");
}
setTimeout(greet,10*1000); // So here the first argument is taken as a function in that case this also comes under the callback function protocal  

