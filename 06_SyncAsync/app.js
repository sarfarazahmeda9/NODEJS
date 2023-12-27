const { log } = require("console");
const fs = require("fs");
const os = require("os");

console.log("1");

//non- blocking
fs.readFile("contact.txt","utf-8", (req, res) => {
    console.log("the async result are ....");
    console.log(res);
});

console.log("2");
//finding CPU count
console.log(`the total CPU's are : ${os.cpus().length}`);

console.log("11");
//blocking
const result = fs.readFileSync("contact.txt","utf-8");
console.log(result);

console.log("12");
