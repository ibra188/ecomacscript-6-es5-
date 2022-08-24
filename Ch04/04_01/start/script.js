//Enhacing the object literals
function skier (name, sound){
  return{
    name: name,
    sound: sound,
    powderYell: function(){
      let tell = this.sound.toUpperCase();
      console.log(`${yell} ${yell}`);
    }
  };
}

skier("sendy", "woo").name;