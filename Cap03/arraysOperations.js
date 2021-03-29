var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//usando o método push para adicionar um elemento ao final do array
numbers.push(10); // adicionado o elemento com valor 10
console.log(numbers[numbers.length - 1]); //acessando o último elemento do array
//vamos adicionar elemento no primeiro elemento
numbers.unshift(-1); //adicionado o -1 ao array
console.log(numbers[0]); //acessando o primeiro elemento do array
//criando operacao de remover elemento do inicio do vetor
var elementFirst = numbers.shift();
console.log("Array atual " + numbers);
console.log("Elemento removido do inicio " + elementFirst);
//realizando a operação de remover no final do array
var elementLast = numbers.pop(); // remover e retornar o elemento
console.log("Array atual " + numbers);
console.log("Elemento removido do final " + elementLast);
