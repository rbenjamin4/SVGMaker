// package libraries and specific file required
const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle } = require("./lib/shapes")

// create async function to prompt user via Inquirer
const prompt = async() => {

// define each prompt name, type, and message
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

  // create the SVG file based on shape classes
  .then((data) => {
    const generateLogo = (data) => {
        let shapeClass
        let text = data.text
        let textColor = data.textColor
        let shape = data.shape
        let shapeColor = data.shapeColor

        if (shape === 'triangle'){
            shapeClass = new Triangle()
        } else if (shape === 'square'){
            shapeClass = new Square()
        } else if (shape === 'circle'){
            shapeClass = new Circle()
        }
        shapeClass.setColor(shapeColor)

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeClass.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
    }

    const SVG = generateLogo(data)

// write and store new SVG file
    fs.writeFile('./examples/logo.svg', SVG, function(err){
      if(err){
      throw err
      }else{
          console.log('Generated logo.svg')
      }
  })
    
  })


}
  
// prompt user when running this file
prompt()
