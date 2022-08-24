//Using symbols

const id = symbols();
const courseInfo = {
  tille: "javascript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course"
};

courseInfo[id] = 2341;
console.log(courseInfo);