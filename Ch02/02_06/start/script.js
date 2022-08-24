//writing maps
let course = new Map();

course.set("react", {description: "ui"});
course.set("jext", {description: "testing"});

console.log(course);
console.log(course.get("react"));

let details = new Map([
  [new Date(), "today" ],
  [2, {javascript: ["js", "node", "react"]}],
  ["item", [1, 2]]
]);

//console.log(details.size)

//another method of getting items
details.forEach(function(item){
  console.log(item);
});