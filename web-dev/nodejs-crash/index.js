console.log("==== Node.js Crash Course Notes ====");

// import using commonjs
// const { generateRandomNumber, celciusToFahrenhiet } = require("./utils");

// import using ES6
import { generateRandomNumber, celciusToFahrenhiet } from "./utils.js";
import getPosts, { getPostsLength } from "./postController.js";

const number = generateRandomNumber();
console.log(`Random number: ${number}`);
console.log(`Celcius to Fahrenhiet: ${celciusToFahrenhiet(number)}`);
console.log(`${getPosts()} \n the length is ${getPostsLength()}`);
