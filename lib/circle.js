const Shapes = require("./shapes.js");

class Circle extends Shapes {
  constructor(text, textColor, shapeColor, textSize) {
    super(text, textColor, shapeColor);
    const validSizes = ['small', 'medium', 'large'];
    if (!validSizes.includes(textSize.toLowerCase())) {
      throw new Error("`textSize` must be one of 'small', 'medium', or 'large'.");
    }
    this.textSize = textSize.toLowerCase();
  }
  render() {
    let fontSize;
    switch (this.textSize) {
      case "small":
        fontSize = 40;
        break;
      case "medium":
        fontSize = 60;
        break;
      case "large":
        fontSize = 80;
        break;
    }

    return `<svg version="1.1"
        width="400" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="126" r="120" fill="${this.shapeColor}" />
        <text x="150" y="145" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Circle;

const circle = new Circle("ABC", "black", "red", "medium");
console.log(circle.render());