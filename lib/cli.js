const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

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
          message: "Please enter up to three letters, numbers or symbols.",
        },
        {
          type: "input",
          name: "textcolor",
          message:
            "What color would you like the text to be? Enter a base color or hex value.",
        },
        {
          type: "list",
          name: "shape",
          message: "What shape would you like?",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "shapecolor",
          message:
            "What color would you like the shape to be? Enter a base color or hex value.",
        },
        {
          type: "list",
          name: "textSize",
          message: "Select a text size:",
          choices: ["small", "medium", "large"],
        },
      ])
      .then((answers) => {
        const shapes = {
          circle: Circle,
          triangle: Triangle,
          square: Square,
        };

        const ShapeClass = shapes[answers.shape];
        if (ShapeClass) {
          const shape = new ShapeClass(
            answers.text,
            answers.textcolor,
            answers.shapecolor,
            answers.textSize
          );
          const svg = shape.render();
          return writeFile("./logo.svg", svg);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Oops. Check the cosole error - Something went wrong.");
      });
  }
}

module.exports = CLI;
