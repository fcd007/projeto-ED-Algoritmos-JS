const numbersArray = [0,1,2,3,4,5,6,7,8,9];
console.log(numbersArray);

// numbersArray[numbersArray.length] = 10
//add elemento array
numbersArray.push(10);
numbersArray.push(11,12);
//exibindo elementos
console.log(numbersArray);

Array.prototype.insertFirstPosition = function(value: unknown) {
    for (let i = this.length; i >= 0; i--) {
       this[i] = this[i-1]
    }
    this[0] = value
};

numbersArray.insertFirstPosition(-1)
console.log(numbersArray)