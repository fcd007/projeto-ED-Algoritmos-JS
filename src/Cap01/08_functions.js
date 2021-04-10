const num = 50;
function sum(num) {
    for (let i = 1; i <= num; i++) {
        if(i % 3 === 0)
        {
            console.log(`Fizz`);  
        }
        if(i % 5 === 0)
        {
            console.log(`Buzz`);  
        }
        if(i % 5 === 0 && i % 3 === 0)
        {
            console.log(`FizzBuzz`);  
        }
    }
}

sum(50);