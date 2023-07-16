
const Triangle = require("../lib/triangle")
const Square = require("../lib/square");
const Circle = require("./circle");

test("Circle render() method should return the expected SVG string with the given shape color and text size", () => {
  const circle = new Circle("ABC", "black", "red", "medium");
  const expectedSVG = `<svg version="1.1"
        width="400" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="126" r="120" fill="red" />
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="black">ABC</text>
        </svg>
        `;
  expect(circle.render()).toEqual(expectedSVG);
});


test("Square render() method should return the expected SVG string with the given shape color", () => {
  const square = new Square("ABC", "black", "red", "medium");
  const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="150" height="150" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text></svg>';
  expect(square.render().replace(/\s+/g, "")).toEqual(expectedSVG.replace(/\s+/g, ""));
});

test("Triangle render() method should return the expected SVG string with the given shape color", () => {
  const triangle = new Triangle("ABC", "black", "red", "medium");
  const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="145" font-size="60" text-anchor="middle" fill="black">ABC</text></svg>';
  expect(triangle.render().replace(/\s+/g, "")).toEqual(expectedSVG.replace(/\s+/g, ""));
});
