/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
      When in the global scope, the value of `this` will be the window/console object. 
      Ex:
      function rideBike(bike) {
        console.log(this)
        return bike
      }
      rideBike('KTM')

* 2. Implicit Binding

* 3. New Binding

* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayBike(bike) {
  console.log(this);
  return bike;
}
sayBike("KTM");

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function () {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

newman.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman); newman.speak.apply(jerry);