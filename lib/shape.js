// This is the main parent class 

class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    throw new Error('Child class must implement a render() method.');
  }
}

module.exports = Shape;