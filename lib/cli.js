const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// uses static so you don't have to create an instance of FileWriter
// you can just call FileWriter.writeToFile() directly
class FileWriter {
  static async writeToFile(fileName, content) {
    const path = `examples/${fileName}`;

    try {
      await writeFile(path, content);
      console.log(`Generated ${fileName}`);
    } catch (error) {
      console.error('Error');
    }
  }
}

// this is what is called on index.js
class CLI {
  constructor() {
  }

  async run() {
    const data = await inquirer
    .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text (Up to three characters)',
          validate: function(input) {
            if(input.length <= 3) {
              return true;
            } else {
              return 'Please enter up to three characters.';
            }
          }
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter color name or hexidecimal code for text color',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter color name or hexidecimal code for shape color',
        },
      ]);
        let svgContent = '';

        // creates an instance of the shape that is chosen and gets the svg code from the object method
        switch (data.shape) {
          case 'Circle':
            const circle = new Circle(data.text, data.textColor, data.shapeColor);
            svgContent = circle.render();
            break;
          case 'Triangle':
            const triangle = new Triangle(data.text, data.textColor, data.shapeColor);
            svgContent = triangle.render();
            break;
          case 'Square':
            const square = new Square(data.text, data.textColor, data.shapeColor);
            svgContent = square.render();
            break;
        }

        FileWriter.writeToFile('logo.svg', svgContent);
  }
}

module.exports = CLI;