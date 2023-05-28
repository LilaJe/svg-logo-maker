const {LogoText, Logo} = require('./logo');
const {Circle, Square, Triangle} = require('./shapes');

describe('LogoText', () => {
    it('should render text', () => {
        const logoText = new LogoText('ABC', 'red');
        expect(logoText.render()).toBe('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>');
    });
});

describe('Logo', () => {
    it('should render a logo', () => {
        const logoText = new LogoText('ABC', 'white');
        const logoShape = new Circle('blue');
        const logo = new Logo(logoText, logoShape);
        expect(logo.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
    });
    it('should render a logo with a different shape', () => {
        const logoText = new LogoText('ABC', 'white');
        const logoShape = new Square('blue');
        const differentLogoShape = new Triangle('green');
        const logo = new Logo(logoText, logoShape);
        expect(logo.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="200" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
        logo.setShape(differentLogoShape);
        expect(logo.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
    });
});