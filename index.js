const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle } = require("./lib/shapes");

const prompt = async() => {

const input = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter up to three characters to use in the logo.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter a color you would like to use for the text (either color name or hexadecimal number).'
    },
    {
      type: 'list',
      message: 'What shape would you like the logo to be?',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color you would like to use for the shape (using color name or hexadecimal number',
      }
  ])

}
  

prompt()
