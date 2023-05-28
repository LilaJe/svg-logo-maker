const  { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
   it('should change colors dynamically', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
        circle.setColor('green');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
   });
   it('should meet the given test criteria', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    it('should render a circle', () => {
        const circle = new Circle('black');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="black" />');
    });
});

describe('Square', () => {
    it('should render a square', () => {
        const square = new Square('blue');
        expect(square.render()).toBe('<rect x="0" y="0" width="300" height="200" fill="blue" />');
    });
});

describe('Triangle', () => {
    it('should render a triangle', () => {
        const triangle = new Triangle('purple');
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
    });
});
