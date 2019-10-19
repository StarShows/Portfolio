const fs = require("fs");
const path = require("path");

// // create a folder

// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("folder created...");
// });

// // Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.text"),
//   "Hello World!",
//   {},
//   err => {
//     if (err) throw err;
//     console.log("File writeen to...");

//     //File append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.text"),
//       " I love nodejs!",
//       {},
//       err => {
//         if (err) throw err;
//         console.log("File writeen to...");
//       }
//     );
//   }
// );

// Read from file
// fs.readFile(path.join(__dirname, "/test", 'hello.text'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.text"),
  path.join(__dirname, "/test", "helloworld.text"),
  err => {
    if (err) throw err;
    console.log("file renamed...");
  }
);


