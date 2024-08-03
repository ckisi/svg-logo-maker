const Shape = require ('../lib/shape.js');

describe('Shape', () => {
  describe('Render', () => {
    test('throws error if render() is called', () => {
      const shape = new Shape();
      const err = new Error('Child class must implement a render() method.')
      expect(shape.render).toThrow(err);
    });
  });

  describe('Text', () => {
    test('should set text', () => {
      const text = 'SVG';
      const shape = new Shape(text, 'white', 'blue');
      expect(shape.text).toBe(text);
    });
  });

  describe('Text Color', () => {
    test('should set text color', () => {
      const textColor = 'white';
      const shape = new Shape('SVG', textColor, 'blue');
      expect(shape.textColor).toBe(textColor);
    });
  });

  describe('Shape Color', () => {
    test('should set shape color', () => {
      const shapeColor = 'blue';
      const shape = new Shape('SVG', 'white', shapeColor);
      expect(shape.shapeColor).toBe(shapeColor);
    });
  });
});