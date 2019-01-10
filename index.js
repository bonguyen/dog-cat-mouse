var Cat = require('./Cat');

var Mouse = require('./Mouse');

var Dog = require('./Dog');

var cat= new Cat();

var mouse = new Mouse('Mickey');

var dog = new Dog();

try {
  cat.eat(mouse);

  cat.eat(dog);
}
catch(error) {
  console.log('error while cat eat' + error);
}

console.log(cat);