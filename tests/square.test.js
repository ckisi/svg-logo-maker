const Square = require('../lib/square.js');

describe('Square', () => {
  describe('Instantiate', () => {
    test('should be instance of Square class', () => {
      const square = new Square;

      expect(square).toBeInstanceOf(Square);
    });
  });

  describe('Text', () => {
    test('should set text', () => {
      const text = 'SVG';
      const square = new Square(text);
      expect(square.text).toBe(text);
    });
  });

  describe('Text Color', () => {
    test('should set text color', () => {
      const textColor = 'black';
      const square = new Square('RNG', textColor, 'red');
      expect(square.textColor).toBe(textColor);
    });
  });

  describe('Shape Color', () => {
    test('should set shape color', () => {
      const shapeColor = 'red';
      const square = new Square('RNG', 'black', shapeColor);
      expect(square.shapeColor).toBe(shapeColor);
    });
  });

  describe('Render() method', () => {
    test('should return svg code', () => {
      const square = new Square('RNG', 'black', 'red');

      expect(square.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="160" fill="blue" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="white" font-size="50">ABC</text>
        </svg>`);
    });
  });
});