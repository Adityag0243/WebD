const fs = require("fs");

// fs.writeFile("message.txt","Ram Ram sir ji!",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });


  
fs.readFile("D:/Desktop/Git_WEBD/Backend/2.2 Native Modules/message.txt", 'utf8' ,(err, data) => {
  if (err) throw err;
  console.log(data);
});

// console.log(filePath); // Log the file path
