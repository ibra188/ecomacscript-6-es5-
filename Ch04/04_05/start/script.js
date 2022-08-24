//introduction classes
class vihicle{
  constructor(description, wheels){
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself(){
    console.log(
      `I am a ${this.description}
      with ${this.wheels} wheels.`
    );
  }
}

let coolSkival = new vihicle("cool ski van", 4);
console.log(coolSkival);
coolSkival.describeYourself();