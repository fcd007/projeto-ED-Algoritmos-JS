
let numbers = [1,2,3,4,5,6,7,8,9,10];

function isEven(number) {
    // console.log(number);
    return number % 2 === 0
}

// console.log(isEven(3));
 console.log(numbers.some(isEven)); //para quando acha um true
 console.log(numbers.every(isEven)); // para quando acha um false
 
const myMap = numbers.map(isEven);
console.log(myMap);
