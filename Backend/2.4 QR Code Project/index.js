/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/



// Step 1
import inquirer from 'inquirer';

import qr from "qr-image";
import fs from "fs";

inquirer


  .prompt([
    {
        // js object 
        "message" : "Type in your URL",
        "name"    : "URL",
    },
  ])


  .then((answers) => {


    // Use user feedback for... whatever!!
    // console.log(answers);   // returning a js script stored in the URL (name : from the .prompt)

    const url = answers.URL;   // storing the value of that object in url variable
    // console.log(url);


    let qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('your_qr.png'));

    fs.writeFile("url.txt", url , (err)=>{
        if(err) throw err;
        console.log("The file has been shaved");

    });


  })





  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }


  });













 
// let png_string = qr.imageSync('I love QR!', { type: 'svg' });