//This is a commnent a lot of this has been changed to comments to prevent mess

console.log("This is a log, I should see this in the dev tools");
console.log("Bro code likes pizza");

//window.alert("Importsant mesage!");

//I spent half an hour stessing over the above statment before realising it was capitilised

/*This
comment has many
lines
*/

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "Bro code likes pizza";

let x;
x = 100;
//console.log(x);

let z = 123;
//console.log(z);

let firstName = "Jack";
let favouriteFood = "Sweets"

//let age = 14;
let price = 10.99;
let gpa = 2.1;

//console.log(`You are ${age} years old`);
//console.log(`The price is ${price}`);
//consolole.log(`Your gpa is: ${gpa}`);

//console.log(`Your name is ${firstName}`);
//console.log(`You like ${favouriteFood}`);

let online = true;
let forSale = true;
//let isStudent = true;

//console.log(`Bro os online: ${online}`);
//console.log(`Is this car for sale: ${forSale}`);
//console.log(`Enrolled: ${isStudent}`);

let fullName ="Jack Roberts";
let age = 14;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


document.getElementById("button").onclick = function(){
    document.getElementById("confirm").innerHTML ="Order placed. Check email for confirmation";
    document.getElementById("button").style.display = "none";
}