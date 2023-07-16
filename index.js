// Packages needed for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes");

// Prompts the user to respond to an array of questions.
function promptUser() {
  inquirer
    .prompt([
      
      {
        type: "input",
        name: "text",
        message:"What characters would you like to use for your logo? The characters cannot be more than 3 characters.",
        // code to verify if the text entered are not more than 3 characters .
        validate: (input) => {
            const verifyLength = input.length <= 3;
            const verifyInput = input.trim() !== '';
            if (!verifyLength) {
              return 'Please provide up to 3 characters only.';
            }
            if (!verifyInput) {
              return 'You cannot have an empty entry, please enter up to 3 characters.';
            }
            return true;
        },
              },
      
      {
        type: "input",
        name: "textColor",
        message:"What color would you like for the text to be? (Please enter a color kwyword or a hexadecimal number)",
      },
      
      {
        type: "list",
        name: "shape",
        message: "Please select 1 shape ONLY from the listed shapes below:",
        choices: ["Square", "Triangle", "Circle"],
      },
      
      {
        type: "input",
        name: "colorOfShape",
        message:"What color would you like for the shape? (Please provide a color keyword or a hexadecimal number)",      
      },
    ])

// These line of codes run after user entered texts.    
    .then((answers) => {
     
      if (answers.text.length > 3) {
        console.log("It can only take up to 3 characters, please attempt it again:");
        promptUser();  
      } else { saveAnswersToFile
        saveAnswersToFile("logo.svg", answers);
      }
    });
}

// Used for saving the SVG file
function saveAnswersToFile(fileName, answers) {
    
    let svgCode = "";
    svgCode =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgCode += "<g>";
    // This code appends the shape selected by the user to the svg code variable
    svgCode += `${answers.shape}`;
  
// The code below adds polygon parameters to the svgCode
    let shapeSelection;
    if (answers.shape === "Triangle") {
      shapeSelection = new Triangle();
      svgCode += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.colorOfShape}"/>`;
    } else if (answers.shape === "Square") {
      shapeSelection = new Square();
      svgCode += `<rect x="50" y="50" width="200" height="100" fill="${answers.colorOfShape}"/>`;
    } else {
      shapeSelection = new Circle();
      svgCode += `<circle cx="150" cy="100" r="80" fill="${answers.colorOfShape}"/>`;
    }
  
    svgCode += `<text x="150" y="125" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>`;
    svgCode += "</g>";
    svgCode += "</svg>";
  
// This generates svg code using the filling system and displays the results to the console.
    fs.writeFile(fileName, svgCode, (err) => {
      err ? console.log(err) : console.log("logo.svg has been gererated! Great job!");
    });
  }

// Prompts the user for input
promptUser();