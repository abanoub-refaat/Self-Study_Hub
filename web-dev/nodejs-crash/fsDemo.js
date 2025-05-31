import fs from "fs/promises";

// readFile(): Callback version
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync(): Synchronous version
// takes a lot of time if the file is too big.
// import fs from "fs";

/*
readFile(): Promise version
fs.readFile("./text.txt", "utf-8").then((data) => console.log(data))
  .catch((err) => console.log(err));
*/

// readFile(): async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "I'm writing in the file ...");
    console.log("File has been written");
  } catch (error) {
    console.log(error);
  }
};

// appendfile(): promise
const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "\nI'm appending in the file ...");
    console.log("File has been appended");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
