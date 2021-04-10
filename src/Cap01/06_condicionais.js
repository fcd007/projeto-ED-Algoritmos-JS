var number = 1;
if(number === 1){
    console.log('Number is equal to 1');
}

var number2 = 0;
if(number2 === 1){
    console.log('Number is equal to 1');
}else{
    console.log(`Number is not equal 1, the value of number is ${number2}`);
}

var number = 2;

if(number === 1){
    console.log(`number initial is equal ${number}`);
    number--;
    console.log(`number now is equal ${number}`);
}else{
    console.log(`number initial is equal ${number}`);
    number++;
    console.log(`number now is equal ${number}`);
}

// caso deseje deixar mais limpo use isto
(number === 1) ? number-- : number++;
console.log(`number now is equal ${number}`);

// o comando switch para seleção de um fluxo condicionado ao valor
var month = 11
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, february or march.')
        break;
}

//