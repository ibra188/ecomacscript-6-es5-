//creating objects with spread operator
const dayTime = {
  breakfast: "otaml",
  lunch: "peanut butter"
};

const nightTime = "mac and cheese";

const backPackMeal = {
  ...dayTime,
  nightTime
};
console.log(backPackMeal);