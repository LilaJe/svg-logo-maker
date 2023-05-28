class LogoText{
    constructor(text, color, textX=150, textY=125) {
        this.text = text;
        this.textColor = color;
        this.textX = textX;
        this.textY = textY;
}

setCoordinates(textX, textY) {
    this.textX = textX;
    this.textY = textY;
}

setText(text) {
    this.text = text;
}

setTextColor(textColor) {
    this.textColor = textColor;
}

render() {
    return `<text x="${this.textX}" y="${this.textY}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
   }
}

class Logo {
    constructor(textObject, shapeObject) {
        this.textObject = textObject;
        this.shapeObject = shapeObject;
    }

    setText(textObj) {
        this.textObject = textObj;
    }

    setShape(shapeObj) {
        this.shapeObject = shapeObj;
    }

    render() {
        const template = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeObject.render()}
        ${this.textObject.render()}
        </svg>`;
        return template;
    }
}

module.exports = { LogoText, Logo };
