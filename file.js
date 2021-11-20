const fs = require("fs"); //file System

// //get as input variable

// // const readline = require('readline').createInterface({

// // })

// const [, , name] = process.argv;

// fs.readFile("./msg.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data + name);
// });

// fs.writeFile("names.txt", name, (err) => {
//   console.log("completed writting");
// });

// fs.appendFile("names.txt", name + "\n", (err) => {
//   console.log("completed writting");
// });

// fs.readFile("./all-names.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data);
// });

// const quote = "The new file ";

const [, , noOfFiles, quote] = process.argv;
for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
    console.log("completed writting", i);
  });
}
