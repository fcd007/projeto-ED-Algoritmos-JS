// utilizando ES5
var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(`Area of circle ${ circleAreaES5(2)}`);

//simplificando a sintaxe do code
const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(`Area of circle ${circleArea(2)}`);

//function apenas com retorno simples
const circleArea2 = r => 3.14 * r * r;
console.log(`Area of cicle2 ${circleArea2(2)}`);

//quando não possui parametros podem usar os () vazios
const hello = () => {
    console.log('Hello');
}
hello();
//usando forma simples de retorno
const hello2 = () => console.log('Hello2');
hello2();