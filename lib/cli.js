import inquirer from 'inquirer';

// Rest of your code
const fs = require('fs');

const jest = require('jest');

// Rest of your code

// Rest of your code

const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Square, Triangle } = require("./lib/shapes");

class CLI {
  constructor() {
    this.answers = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message:"Please enter up to three characters, letter or number?",
          validate: function (input) {
            return input.length <= 3;
          }
        },
        {
          type: "input",
          name: "textcolor",
          message:
            "Enter the text color (hexadecimal, i.e. #CD5C5C)",
            validate: function (input) {
                // Implement validation logic to validate color input
                // For example, you can check if the input is a valid hexadecimal value or a keyword from coloursArray.js
                return true; // Replace with your validation logic
              }
        },
        {
          type: "list",
          name: "logoShape",
          message:  'Please choose the logo shape (Hit enter to Select)',
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "shapecolor",
          message:
            "What color would you like the shape to be? Enter a base color or hex value.",
        },
      ])
      .then((answers) => {
        const shapes = { circle: Circle, triangle: Triangle, square: Square,
        };

        const ShapeClass = shapes[answers.shape];
        if (ShapeClass) {
          const shape = new ShapeClass(
            answers.text,
            answers.textColor,
            answers.shapeColor
          );
          const svg = shape.render();
          return writeFile("./logo.svg", svg);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Try again, is not working");
      });
  }
}

module.exports = CLI;
