const path = require("path");

const filename = path.join(__filename);
const dirname = path.join(__dirname)
const basename = path.basename(filename)
const extname = path.extname(filename)
console.log(filename);  // give path or directory of file.
console.log(basename);  // give the name of the file only.
console.log(extname);  // give the extension of the file. 

// fs module
const fs = require("fs");
fs.copyFileSync("fileone.txt", "filetwo.txt"); // copy the data of one file to the another.

// nodejs module 
const superheros = require("superheroes"); // normal module of nodejs where random name of heros are being dispalyed.
console.log(superheros.random());