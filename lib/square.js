const Shape = require('./shape.js');

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="160" fill="blue" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="white" font-size="50">ABC</text>
        </svg>`;
  }
}

module.exports = Square;