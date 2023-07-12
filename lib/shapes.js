class Shapes {
  constructor(text, textColor, shapeColor) {
    if (!text || text.length !== 3) {
      throw new Error("`text` must contain 3 characters.");
    }
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
    return shapeColor;
  }
  setText(text) {
    this.text = text;
    return text;
  }
  render() {
    throw new Error("Child class must implement render() method.");
  }
}

module.exports = Shapes;

const Shapes = require("./lib/shapes.js");

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect  x="75" y="30" width="150" height="150" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Square;

const Shapes = require("./lib/shapes.js");

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Triangle;

const Shapes = require("./lib/shapes.js");

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="105" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Circle;