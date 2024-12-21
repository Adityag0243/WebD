// var generateName = require('sillyname');

// import generateName from "sillyname";  
// write this first -->  import ...... from "sillyname"  then write ..fn name.. to get suggestio from vscode

// var sillyName = generateName();

// console.log(`My random name is: ${sillyName}.`);

// import {randomSuperhero} from "superheroes";

// let superHero = randomSuperhero(); 
// console.log(`I am ${superHero}!`);


import superheroes from "superheroes";

let super_hero = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${super_hero}!`);
