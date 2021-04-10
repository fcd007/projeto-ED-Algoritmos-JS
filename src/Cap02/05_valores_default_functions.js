function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
};

console.log(sum(2,4));

function sumAlt(x, y, z) {
    if(x === undefined ) x = 1;
    if(y === undefined ) y = 2;
    if(z === undefined ) z = 3;

    return x + y + z;
}

console.log(sumAlt());