console.log(null == undefined);// true
console.log(undefined == null); // true
console.log( 1 == 'Oi'); //false
console.log('parker' ? true : false); //true
//colocando o operador === como referência de comparação
console.log('park' === true); // string !== boolean => false
console.log('park' === 'park'); // string === string caracetes idênticos
var person1 = { name: 'John Kenedy'};
var person2 = { name: 'John Kenedy'};
console.log(person1 === person2); // person1 e person2 referenciam objetos diferentes => false
var person3 = person1;
console.log(person1 === person3); //objetos com a mesma referência =>true