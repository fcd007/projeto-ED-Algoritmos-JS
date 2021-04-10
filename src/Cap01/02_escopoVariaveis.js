var myVariable = 'global';
myOtherVariable = 'globalOther';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'localOther';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);