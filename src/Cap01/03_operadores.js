//uso de variáveis no Javascript 
var num =1; 
num = 3;
var price = 1.5;
var myName = 'Dantas';
var trueValue = true;
var nullVar = null;
var und;

var num = 0;
num = num + 2;
num = num * 2;
num = num / 2;
num++;
num--;
num += 1;
num -= 1;
num *= 3;
num /= 2;
num %= 2;

//operadores e seu comportamento
console.log('num == 1: ' + (num == 1));
console.log('num === 1: ' + (num === 1));
console.log('num != 1: ' + (num != 1));
console.log('num !== 1: ' + (num !== 1));
console.log('num > 1: ' + (num > 1));
console.log('num < 1: ' + (num < 1));
console.log('num <= 1: ' + (num <= 1));
console.log('num >= 1: ' + (num >= 1));
console.log('true && false:' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true: ' + (!true));

//operadores bit a bit(bitwise)
console.log('5 & 1: ', (5 & 1));
console.log('5 | 1: ', (5 | 1));
console.log('~5 : ', (~5));
console.log('5 ^ 1: ', (5 ^ 1));
console.log('5 << 1: ', (5 << 1));
console.log('5 >> 1: ', (5 >> 1));

//operador typeof muito útil quando queremos validar dados pelo seu tipo
console.log('typeof num: ', typeof num);
console.log('typeof Dantas: ', typeof 'Dantas');
console.log('typeof true: ', typeof true);
console.log('typeof [1,2,3]: ', typeof [1,2,3]);
console.log('typeof {name: john }: ', typeof {name: 'John' });


//operador delete é suportado pelo Javascript
 var myObject = { firstName: 'Francisco', lastName: 'Claudeilton Dantas', age: 31 };
 delete myObject.age;
 console.log('Name: ' + myObject.firstName + myObject.lastName)