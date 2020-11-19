function sayHello() {
    console.log('Hello function!');
}
//call function sayHello()
sayHello();

//functions com argumentos entrada
function output(text) {
    console.log(text);
}
//call function2 output(arg)
output('Hello function2');

//function com retorno de argumentos e entrada de dados
function sum(number1, number2) {
    return number1 + number2;
}
//call sum(2,5);
var result = sum(2,5);
console.log(`result is equal ${result}`);