import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodbyeHandler(name) {
  console.log("Goodbye " + name);
}

// register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// emit events
myEmitter.emit("greet", "Abanoub");
myEmitter.emit("goodbye", "Abanoub");

// error handling
myEmitter.on("error", (err) => {
  console.log("An Error has occured: " + err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
