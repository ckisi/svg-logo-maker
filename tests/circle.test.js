const Circle = require('../lib/circle.js');

describe('Circle', () => {
  describe('Instantiate', () => {
    test('should be instance of Circle class', () => {
      const circle = new Circle();

      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe('Text', () => {
    test('should set text', () => {
      const text = 'SVG';
      const circle = new Circle(text);
      expect(circle.text).toBe(text);
    });
  });

  describe('Text Color', () => {
    test('should set text color', () => {
      const textColor = 'white';
      const circle = new Circle('SVG', textColor, 'blue');
      expect(circle.textColor).toBe(textColor);
    });
  });

  describe('Shape Color', () => {
    test('should set shape color', () => {
      const shapeColor = 'blue';
      const circle = new Circle('SVG', 'white', shapeColor);
      expect(circle.shapeColor).toBe(shapeColor);
    });
  });

  describe('Render() method', () => {
    test('should return svg code', () => {
      const circle = new Circle('SVG', 'white', 'blue');

      expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);
    });
  });
});