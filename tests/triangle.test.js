const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
  describe('Instantiate', () => {
    test('should be instance of Triangle class', () => {
      const triangle = new Triangle();

      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe('Text', () => {
    test('should set text', () => {
      const text = 'SVG';
      const triangle = new Triangle(text);
      expect(triangle.text).toBe(text);
    });
  });

  describe('Text Color', () => {
    test('should set text color', () => {
      const textColor = 'white';
      const triangle = new Triangle('ABC', textColor, 'yellow');
      expect(triangle.textColor).toBe(textColor);
    });
  });

  describe('Shape Color', () => {
    test('should set shape color', () => {
      const shapeColor = 'blue';
      const triangle = new Triangle('ABC', 'purple', shapeColor);
      expect(triangle.shapeColor).toBe(shapeColor);
    });
  });

  describe('Render() method', () => {
    test('should return svg code', () => {
      const triangle = new Triangle('ABC', 'purple', 'yellow');

      expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50,180" fill="yellow" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="purple">ABC</text>
        </svg>`);
    });
  });
});