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
        