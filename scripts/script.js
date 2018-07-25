//let and const in loops
var funcs = [];

for(let i=0; i< 10; i++){
    funcs.push(function(){console.log(i);});
}

funcs.forEach(function(func) {
    func();
});

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

//==== String Methods

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
console.log('no'.repeat(5))*/
