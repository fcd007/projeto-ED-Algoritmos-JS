var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numbers.reduce(function (previous, current) { return previous + current; });
console.log(resultado);
numbers.forEach(function (element) {
    console.log(element);
});
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var iterator = numbers_1[_i];
    console.log(iterator % 2 === 0 ? "even" : "odd");
}
