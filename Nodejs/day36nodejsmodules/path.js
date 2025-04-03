// when we are working with file and directory paths, path module.....
const path = require("path");

// get the file name from the path
const fileName = path.basename("/users/KISHORE-KUMAR/pictures/file.txt");
console.log(fileName)
const ext = path.extname("/users/KISHORE-KUMAR/pictures/file.txt");
console.log(ext);

// path.parse()...
// parse a path
const parsedPath = path.parse("/Users/KISHORE-KUMAR/pictures/file.txt");
console.log(parsedPath)

//path.join..join path segments

console.log(path.join("folder", "subfolder", "file.txt"));

//wanted to get the directory name

console.log(path.dirname("/Users/KISHORE-KUMAR/pictures/file.txt"));

// path.format()..format a path object into string...
const pathObject = {
    root: '/',
    dir: '/Users/KISHORE-KUMAR/pictures',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  }
  console.log(path.format(pathObject))



console.log("kishore")
