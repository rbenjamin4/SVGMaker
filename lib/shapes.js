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
      return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/>`
    }
  }
  
  // Square class inherits Shape class
  class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      // Return a rectangle based on chosen color
      return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`
    }
  }
  
  // Circle class inherits Shape class
  class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      // Return a circle based on chosen color
      return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`
    }
  }
  
  // Export classes
  module.exports = { Triangle, Square, Circle }