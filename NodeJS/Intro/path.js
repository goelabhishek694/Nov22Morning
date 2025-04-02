// path module i nodejs provides functions for working wiith the file and directory paths . 

const path = require("path");

const fullPath = path.join("React", "Intro", 'abc');
console.log(fullPath);

//resolves and absolute path from multiple path segments, starting from root dir
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(absolutePath);

const fileName = path.basename('React/Intro/abc.txt');
console.log(fileName);

const dirName = path.dirname('React/Intro/abc.txt');
console.log(dirName);

const extName = path.extname('React/Intro/abc.txt');
console.log(extName);

const pathInfo = path.parse('React/Intro/abc.txt');
console.log(pathInfo);

const isAbsolute = path.isAbsolute('/path/to/file.txt');
console.log(isAbsolute);

const relativePath = path.relative('/path/from', '/path/to');
console.log(relativePath);