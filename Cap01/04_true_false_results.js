function testeTruthy(value) {
    return value ? console.log('truthy') : console.log('falsy');
}

//entrada e saídas para cada tipo de entrada
testeTruthy(true); 
testeTruthy(false);
testeTruthy(new Boolean(false));
testeTruthy('');
testeTruthy('Dantas');
testeTruthy(new String(''));
testeTruthy(1);
testeTruthy(-1);
testeTruthy(NaN);
testeTruthy(new Number(NaN));
testeTruthy({});
var object = {name: 'Lucas'};
testeTruthy(object);
testeTruthy(object.name);
testeTruthy(object.age)