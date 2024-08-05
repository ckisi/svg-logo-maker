const Shape = require('./shape.js');

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  // SVG code for square
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="160" fill="${this.shapeColor}" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
        </svg>`;
  }
}

module.exports = Square;