const inquirer = require('inquirer');
const { SvgBuilder } = require('svg-builder');
const fs = require('fs');
const { ChildProcess } = require('child_process');

const shapeOptions = ['circle', 'triangle', 'square'];

inquirer
    ,prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three charactetrs for your logo',
            validate: (input) => {
                return input.length <= 3 ? true : ''
            }, 
        }, 
        {
            type: 'input', 
            name: 'text', 
            message: 'Enter the text color (color keyword or hexadecimal number):',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo'
            choices: shapeOptions, 

        },

        {
            type: 'input'
            name: 'shapeColor'
            message: 'Enter the shaope color (keyword or hex):', 
        },
    ])
    .then((answers) => {
        //process user input for file gen

        const { text, textColor, shape, shapeColor } = answers;
        const svg = new SvgBuilder();

        // set props
        svg.width(300).height(200).viewbox(0,0,300,200);

        //create shape based on user input
        switch (shape) {
            case 'circle':
                svg.circle(150,100,50).fill(shapeColor);
                break;
            case 'triangle':
                svg.polygon('150,20 250, 180 50, 180').fill(shapeColor);
                break;
            case 'square':
                svg.rect(100,50,100,100).fill(shapeColor);
                break;
        }

        //add text
        svg.text(150, 125, text).fill(textColor).fontFamily('Arial').fontSize(40).anchor('middle');

        //save to a file
        fs.writeFileSync('logo.svg', svg.toString());

        console.log('Generated logo.svg');

    })
    .catch((error) => {
        console.error(error);
    });
        