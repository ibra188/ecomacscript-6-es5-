//destructuring
const vacation = {
  destination: "chile",
  traveler: 2,
  activity: "sking",
  cost: "so much"
}

function marketting({destination, activity}){
  return `Come to ${destination} and do some ${activity}`;
}

console.log(marketting(vacation));

const {title, price} = {
   title: "reuben",
   price: 7,
   description: [
    "bread",
    "corned beef",
    "dressing",
    "sauerkraut",
    "cheese"
   ]
};

console.log(title);
console.log(price);