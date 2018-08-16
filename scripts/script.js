// === objects literals - syntax
function createPerson(name, age) {
  return {
    name,
    age
  };
}

var person = {
  name: "Breno",
  sayName() {
    console.log(this.name);
  }
};

var person = {},
  lastName = "last name";

person["first name"] = "Breno";
person[lastName] = "Arantes";

console.log(person["first name"]);
console.log(person[lastName]);
console.log(person.lastName);
// === IIFE and 'this' keyword
/*
var PageHandler = {
  id: "123456",
  init: function() {
    document.addEventListener(
      "click",
      event => this.doSomething(event.type),
      false
    );
  },
  doSomething: function(type) {
    console.log("Handling " + type + " for " + ths.id);
  }
};
/*
var person = (name => {
  return {
    getName: function() {
      return name;
    }
  };
})("Breno");

console.log(person.getName());
*/
// === arrow function - part2
/*
var values = [10, 2, 1, 15, 20];

var resultA = values.sort((a, b) => a - b);
var result = values.sort(function(a, b) {
  return a - b;
});

console.log(resultA);
console.log(result);

function myFunction() {
  //console.log(arguments[0]);
  return () => arguments[0];
}
var myValue = myFunction("Breno");
console.log(myValue());

var comparator = (a, b) => a - b;
console.log(typeof comparator);
console.log(comparator instanceof Function);
*/
// === arrow functions
/*
var reflectA = value => value;
var reflect = function(value) {
  return value;
};
console.log(reflect(2));
console.log(reflectA(3));

var sumA = (num1, num2) => num1 + num2;
var sum = function(num1, num2) {
  return num1 + num2;
};
console.log(sum(1, 2));
console.log(sumA(3, 2));

var getNameA = () => "Breno Nunes";
var getName = function() {
  return "breno";
};
console.log(getName());
console.log(getNameA());

var getTemplateA = id => ({ id: id, name: "TempA" });
var getTemplate = function(id) {
  return {
    id: id,
    name: "Temp"
  };
};

console.log(getTemplate(5));
console.log(getTemplateA(6));
*/
// === block level functions

// === new.target
/*
function Person(name){
    //if( this instanceof Person){
    if( typeof new.target !== "undefined"){
        this.name = name;
    } else {
        throw new Error("You must use new with Person");
    }
}

var person = new Person("Breno");
var justObj = Person.call(person, "John");

console.log(person);
console.log(justObj);
*/
// === name Property
/*
function doSome(){
    
}

var doAnotherSome = function(){

}

console.log(doSome.name);
console.log(doAnotherSome.name);

var doMyThing = function doMyThingAgain(){
    console.log('My thing');
}

console.log(doMyThing.name);

var person = {
    get firstName(){
        return "Breno";
    },
    sayName: function(){
        console.log(this.name);
    }
}

console.log(person.sayName.name);

var descriptor = Object.getOwnPropertyDescriptor(person, "firstName");

console.log(descriptor.get.name);
*/
// === Spread Parameters
/*
let val1 = 25;
let val2 = 50;
let values = [10,20,30,40]

//console.log(Math.max.apply(Math, values));
console.log(Math.max(...values));
*/
// === Rest parameters
/*function sortRestArgs(...args){
    return args.sort();
}

function sortMyArgs(){
    return arguments.sort();
}

console.log(sortRestArgs(5,6,8,7));
console.log(sortMyArgs(5,6,8,7));

function multiply(multiplier, ...args){
    return args.map(el => {
        return multiplier * el;
    });
}

console.log(multiply(5,1,2,3));

function add(...args){
    let [a, b, c] = args;
    return a + b +c;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));*/

// === using default parameters
/*
function getValue(){
    return 5;
}

function add(first, second = getValue()){
    return first + second;
}

console.log(add(1,1));
console.log(add(1));

function makeRequest(url, timeout, callback){
    timeout = timeout || 3000;
    callback = callback || function(){

    };
}

function makeRequestNew(url, timeout = 3000, callback = function(){}){
    console.log(timeout);
}

makeRequestNew('/foo', 5000);

function mixArgs(first, second){
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}

mixArgs("a","b");
*/
// === let and const in loops
/*
var funcs = [];

for(let i=0; i< 10; i++){
    funcs.push(function(){console.log(i);});
}

funcs.forEach(function(func) {
    func();
});
*/
// === let and const in block level scope
/*
function getValue(condition){
    
    let count = 11;
    console.log(count);

    const maxValue=22;

    const person = {
        name: "BNunes"
    }

    person.name = "BArantes";
    console.log(person.name);

    person = {
        name: 'B'
    }

    console.log(person.name);
    
    if(condition){     
        console.log(maxValue);   
        let count = 44;
        console.log(count);
        var myValue = "Breno";
        console.log(myValue);
        return myValue;
    }else{
        console.log(myValue);
        console.log(count);
        return null;
    }
}

console.log(getValue(true));
*/

// === Template Literal

// == Exercise 1
/*
var name = "Breno";
var vocation = "programmer";

console.log(`${name} is a ${vocation}`);
*/
// == Exercise 2
/*
var price = 25;
var newPrice = 10;
var percent = (((price - newPrice) / (price)) * 100);

var msg = `You saved ${percent}% on this sale`;
console.log(msg);
*/
/*var msg = true;

console.log(msg);
var type = typeof msg;
console.log(type);
console.log(msg.length);

msg = 'Hello \
Breno \
of the World!';

console.log(msg);
console.log(typeof msg);
console.log(msg.length);

msg = 'Hello \n \
Breno \n \
of the World!';

console.log(msg);
console.log(typeof msg);
console.log(msg.length);

var name = 37,
    message = `Hello ${name}`;

console.log(message);

var count  = 17,
    price = 0.5,
    message = `${count} itens cost $${(count * price).toFixed(2)}`;

console.log(message);
*/

// === String Methods

/*var msg = 'Hello Word'

console.log('1 - ' + msg.startsWith('H'))
console.log('2 - ' + msg.endsWith('d'))
console.log('3 - ' + msg.includes('e'))

console.log('4 - ' + msg.startsWith('W'))
console.log('5 - ' + msg.endsWith('o'))
console.log('6 - ' + msg.includes('v'))

console.log('7 - ' + msg.startsWith('l', 2))
console.log('8 - ' + msg.endsWith('o', 8))
console.log('9 - ' + msg.includes('o', 5))

console.log('x'.repeat(3))
console.log('bre'.repeat(2))
console.log('no'.repeat(5))
*/
