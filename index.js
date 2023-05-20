const inquirer = require('inquirer');
const { SvgBuilder } = require('svg-builder');
const fs = require('fs');

const shapeOptions = ['circle', 'triangle', 'square'];
