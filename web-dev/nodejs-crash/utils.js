function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function celciusToFahrenhiet(celcius) {
  return celcius * 1.8 + 32;
}

// Export the function using commonjs
// module.exports = { generateRandomNumber, celciusToFahrenhiet };

// Export the function using ES6
export { generateRandomNumber, celciusToFahrenhiet };
