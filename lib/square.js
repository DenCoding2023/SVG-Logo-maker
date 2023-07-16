const Shapes = require("./shapes.js");


class Square extends Shapes {
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
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect  x="75" y="30" width="150" height="150" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Square;
const square = new Square("ABC", "black", "red", "medium");
console.log(square.render());