//working with generator

function* director(){
  yield "three";
  yield "four";
  yield "two";
  yield "action";

}

let countDown = director();

console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next());
console.log(countDown.next());