// Create Shape class
class Shape {
    constructor() {
      this.color = color
    }
    // setColor function
    setColor(color) {
      this.color = color
    }
  }
  
  // Triangle class inherits Shape class
  class Triangle extends Shape {
    constructor(color){
        super(color)
    }
    render() {
      // Return a polygon based on color chosen
      return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
    }
  }
  
  // Square class inherits Shape class
  class Square extends Shape {
    constructor(color){
        super(color)
    }
    render() {
      // Return a rectangle based on chosen color
      return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
  }
  
  // Circle class inherits Shape class
  class Circle extends Shape {
    constructor(color){
        super(color)
    }
    render() {
      // Return a circle based on chosen color
      return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
  }
  
  // Export classes
  module.exports = { Triangle, Square, Circle }