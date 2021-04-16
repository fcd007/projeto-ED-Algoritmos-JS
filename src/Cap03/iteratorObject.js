var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var iterator = numbers[Symbol.iterator]();
console.log(iterator);
for (var _i = 0, iterator_1 = iterator; _i < iterator_1.length; _i++) {
    var index = iterator_1[_i];
    console.log(index);
}
console.log(iterator);
