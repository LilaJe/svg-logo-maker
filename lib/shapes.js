class Shapes {
   constructor(color) {
    this.color = color;
   }

   setColor(color) {
    this.color = color;
   }
    

    render() {
        throw new Error('You have to implement the method render!');
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color);
    }

    render(shapeColor) {
        return `<rect x="0" y="0" width="300" height="200" fill="${this.color}" />`;

    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};