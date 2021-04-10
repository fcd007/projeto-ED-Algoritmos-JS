let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numbers.reduce((previous, current) => previous + current);
console.log(resultado);

numbers.forEach((element) => {
  console.log(element);
});

for (const iterator of numbers) {
  console.log(iterator % 2 === 0 ? "even" : "odd");
}
