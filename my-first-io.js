const fs = require("fs");
const newlines = fs.readFileSync(process.argv[2]);
const totalLines = newlines.toString().split("\n").length - 1;
console.log(totalLines);
