let person = {
  name: 'Carolina',
  lastname: 'Jimenez',
  nickname: 'carolinajimenez26',
  getInformation: function () {
    return `${this.name} ${this.lastname} ${this.nickname}`
  }
};

let {name, lastname, nickname} = person;
console.log(name, lastname, nickname);
console.log(person.getInformation());

let {name: another_name} = person;
console.log(another_name);

let [x, y] = ['a', 'b'];

console.log(x, y);
