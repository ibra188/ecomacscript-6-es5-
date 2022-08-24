//understarding this in arrow function
let person = {
  first: "angie",
  hobbies: ["biki", "jike", "ski"],
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      let string = `${this.first} likes to ${hobby}`;
      console.log(string);
    });
  }
}
person.printHobbies();