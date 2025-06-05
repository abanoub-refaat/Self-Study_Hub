import url from "url";

const urlString = "https://www.google.com/search?q=heelo+world";

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url: file url
console.log(import.meta.url);

// fileURLToPath()
const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));
