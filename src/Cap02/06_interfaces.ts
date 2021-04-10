interface Person {
    name: string
    age: number
}

function printName(person:Person) {
    console.log(person.name);
}

const person = { name: 'Lucas', age: 18 }
const person2 = { name: 'Diana', age: 20, phone: '123-45678'}
printName(person)
printName(person2)