var myVariable = "global";
myOtherVariable = "global";

function myFuntion() {
  var myVariable = "local";
  return myVariable;
}

function myOtherFunction() {
  var myVariable = "local";
  return myVariable;
}

console.log(myVariable);
console.log(myFuntion());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);
