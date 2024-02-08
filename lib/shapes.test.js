const { Triangle, Square, Circle } = require("./lib/shapes")

describe('Triangle class', () => {
    describe('render method', () => {
        it('should return the code to create a red triangle', () => {
            const shape = new Triangle()
            shape.setColor('red')
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`)
        })
        it('should return the code to create a red triangle', () => {
            const shape = new Triangle()
            shape.setColor('#ff0000')
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="#ff0000" />`)
        })
    })
})

describe('Square class', () => {
    describe('render method', () => {
        it('should return the code to create a blue triangle', () => {
            const shape = new Square()
            shape.setColor('blue')
            expect(shape.render()).toEqual(`<rect x="50" y="20" width="200" height="200" fill="blue" />`)
        })
        it('should return the code to create a blue triangle', () => {
            const shape = new Square()
            shape.setColor('#0000ff')
            expect(shape.render()).toEqual(`<rect x="50" y="20" width="200" height="200" fill="#0000ff" />`)
        })
    })
})

describe('Circle class', () => {
    describe('render method', () => {
        it('should return the code to create an orange circle', () => {
            const shape = new Circle()
            shape.setColor('orange')
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="orange" />`)
        })
        it('should return the code to create an orange circle', () => {
            const shape = new Circle()
            shape.setColor('#ffA500')
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="#ffA500" />`)
        })
    })
})