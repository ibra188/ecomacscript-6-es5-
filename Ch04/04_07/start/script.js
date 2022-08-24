//Getting started with class value

let attendance = {
  _list: [],
  set addName(name){
    this._list.push(name);
  },
  get list(){
    return this._list.join(", ");
  }
};

attendance.addName = "Joanne starr";
console.log(attendance.list);

attendance.addName = "Bill Benkelman";
attendance.addName = "ibra";
console.log(attendance.list);