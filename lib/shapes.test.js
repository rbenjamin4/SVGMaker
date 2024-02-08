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