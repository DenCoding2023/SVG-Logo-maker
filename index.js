const fs = require('fs');
const inquire = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const questions = require('');

inquire.prompt([
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to three characters:",
    validate: function (input) {
      return input.length <= 3;
    }
  },
  {
    type: "input",
    name: "textColor",
    message: 'Enter the text color (hexadecimal, i.e. #CD5C5C) or keyword (refer to coloursArray.js):',
    validate: function (input) {
      // Implement validation logic to validate color input
      // For example, you can check if the input is a valid hexadecimal value or a keyword from coloursArray.js
      return true; // Replace with your validation logic
    }
  },
  {
    type: "list",
    name: "logoShape",
    message: 'Please choose the logo shape (Hit enter to Select)',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: "input",
    name: "shapeColor",
    message: 'Enter the shape color (hexadecimal, i.e. #CD5C5C) or keyword (refer to coloursArray.js):',
    validate: function (input) {
      // Implement validation logic to validate color input
      // For example, you can check if the input is a valid hexadecimal value or a keyword from coloursArray.js
      return true; // Replace with your validation logic
    }
  }
])
.then(answers => {
  const { text, textColor, logoShape, shapeColor } = answers;

  // Generate SVG code based on user input
  const svgCode = generateSVG(text, textColor, logoShape, shapeColor);

  // Write SVG code to file
  fs.writeFile('logo.svg', svgCode, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
})
.catch(error => {
  console.error(error);
});

function generateSVG(text, textColor, logoShape, shapeColor) {
  // Implement SVG generation logic based on user input
  // Use the provided shape classes (Circle, Square, Triangle) to create the desired shape
  // Use the text and color values to add the text and color to the SVG code
  // Return the generated SVG code as a string
}
