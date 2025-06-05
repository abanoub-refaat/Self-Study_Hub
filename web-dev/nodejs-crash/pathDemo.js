import path from "path";
import url from "url";

const filePath = "dir1/dir2/file.txt";

// basename(): return the last part of the path
console.log(path.basename(filePath));

// dirname(): return the path without the last part
console.log(path.dirname(filePath));

// extname(): return the file extension
console.log(path.extname(filePath));

// pasrse(): return an object with all the path parts
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join(): return the full path
// resolve(): return the full path
const filepath2 = path.join(__dirname, "dir1", "dir2", "file.txt");
console.log(filepath2);
