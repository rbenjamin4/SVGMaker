// Create Shape class
class Shape {
    constructor() {
      this.shapeColor = this.shapeColor
    }
    // setColor function
    setColor(shapeColor) {
      this.shapeColor = shapeColor
    }
  }
  
  // Triangle class inherits Shape class
  class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      // Return a polygon based on color chosen
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
  }
  
  // Square class inherits Shape class
  class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      // Return a rectangle based on chosen color
      return `<rect x="50" y="20" width="200" height="200" fill="${this.shapeColor}"/>`
    }
  }
  
  // Circle class inherits Shape class
  class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      // Return a circle based on chosen color
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
  }
  
  // Export classes
  module.exports = { Triangle, Square, Circle }