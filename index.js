const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle } = require("./lib/shapes")

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

    return `<svg version="1.1" width="300" height="200">${shapeClass.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
    }

    const SVG = generateLogo(data)

    fs.writeFile('./examples/logo.svg', SVG, function(err){
      if(err){
      throw err
      }else{
          console.log('Generated logo.svg')
      }
  })
    
  })


}
  

prompt()
