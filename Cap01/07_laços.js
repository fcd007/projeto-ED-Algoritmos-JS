//criando um loop de vai do index = 1 ao 9, com incremento de 1
for (let index = 1; index <= 9; index++) {
    console.log(`passo atual => ${ index }`);  
}

// criando um laço com while
console.log(`\nWhile loop:`);
var index = 1;
//faça enquanto index menor igual a 9
while (index <= 9) {
    console.log(`Index atual => ${index}`);
    //necessário para poder incrementar os passos
    index++;
}

// criando um laço com do while
console.log(`\ndo While loop:`);
 var index2 = 0;
 do {
    console.log(`Index2 => ${index2}`);
    index2++;
 }while(index2 <= 9);