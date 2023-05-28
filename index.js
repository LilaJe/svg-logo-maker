const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { LogoText, Logo } = require('./lib/logo');

function promptUser() {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What text do you want to use?',
                validate: textInput => {
                    if (textInput && textInput.length <= 3) {
                        return true;
                    }
                    else {
                        console.log('Please enter up to 3 letters for the text of your logo!')
                        return false;
                    }
                }
            },
            {
                type: 'input', 
                name: 'textColor',
                message: 'What color would you like your text to be?',
                validate: colorInput => {
                    if (colorInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a color for your text!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to use?',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be?',
                validate: colorInput => {
                    if (colorInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a color for your shape!');
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            resolve(answers);
        })
        .catch(err => {
            reject(err);
        });
    });
}

function constructShape(shape, color) {
    switch (shape) {
        case 'Circle':
            return new Circle(color);
        case 'Square':
            return new Square(color);
        case 'Triangle':
            return new Triangle(color);
    }
}

function generateSVG(answers) {
    console.log(JSON.stringify(answers));
    const shape = constructShape(answers.shape, answers.shapeColor);
    console.log(JSON.stringify(shape));
    const text = new LogoText(answers.text, answers.textColor);
    console.log(JSON.stringify(text));
    const logo = new Logo(text, shape);
    console.log(JSON.stringify(logo));
    return logo.render();
}

function init() {
    try {
        promptUser()
        .then(answers => {
            const svg = generateSVG(answers);
            fs.writeFileSync(path.join(__dirname, 'dist', 'logo.svg'), svg);
            console.log('Generated logo.svg in the dist folder');
        })
        .catch(err => {
            console.log(err);
        });
    }
    catch (err) {
        console.error(err);
    }
}

init();