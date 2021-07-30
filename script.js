'use strict';


const User = function(name, id) {
    this.name = name;
    this.age = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}!`);
    };
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

/* console.log(ivan.hello());
console.log(alex); */

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел!!!`);
};


console.log(alex.exit());