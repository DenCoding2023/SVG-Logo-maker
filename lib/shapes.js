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
