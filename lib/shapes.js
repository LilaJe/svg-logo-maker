class Shapes {
    constructor(text, subtemplate, textX=150, textY=100) {
        this.template =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${subtemplate}
        <text x="${textX}" y="${textY}" font-size="20" text-anchor="middle" fill="white">${text}</text>
        </svg>`;
    }

    render() {
        return this.template;
    }
}

class Circle extends Shapes {
    constructor(text) {
        super(text, `<circle cx="150" cy="100" r="80" fill="green" />`);
        this.myTemplate = text;
    }
}

class Square extends Shapes {
    constructor(text) {
        super(text, `<rect x="0" y="0" width="300" height="200" fill="green" />`);
        this.myTemplate = text;
    }
}

class Triangle extends Shapes {
    constructor(text) {
        super(text, `<polygon points="0,0 300,0 150,200" fill="green" />`, 150, 130);
        this.myTemplate = text;
    }
}
export {Circle, Square, Triangle};