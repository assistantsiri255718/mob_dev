function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return 'Error: Division by zero';
    }
    return a/b;
}
function remiander(a,b){
    return a%b;
}
let num1=10;
let num2=5;
let sum=add(num1, num2);
let difference=subtract(num1, num2);
let product=multiply(num1, num2);
let quotient=divide(num1, num2);
let rem=remiander(num1, num2);
console.log(num1 + " + " + num2 + " = " + sum);
console.log(num1 + " - " + num2 + " = " + difference );
console.log(num1 + " * " + num2 + " = " + product);
console.log(num1 + " / " + num2 + " = " + quotient);
console.log(num1 + " % " + num2 + " = " + rem);