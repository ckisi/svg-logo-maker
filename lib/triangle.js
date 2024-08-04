const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

module.exports = Triangle;