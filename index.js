const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const questions = [{
    type: 'input',
    message: 'Please enter your three character logo text',
    name: 'logo_text',
  },
  {
  type: 'input',
  message: 'Please enter your text color',
  name: 'text_color',
},
{
    type: 'list',
    message: 'Please select your logo shape',
    name: 'text_shape',
    choices: ['Triangle', 'Square', 'Circle']
  },
  {
  type: 'input',
  message: 'Please select your shape color',
  name: 'shape_color',
}]

function createSvg(file, shape) {
    fs.writeFile(file, shape.render(), function(err, data) {
        if(err) console.log(err)
        console.log("Svg created")
    })
}

function init() {
    inquirer.prompt(questions).then(data=> {
        let shape= data.text_shape
        let outputShape;

        if(shape === "Triangle") {
            outputShape = new Triangle(data.logo_text, data.shape_color, data.text_color)
        }
        else if(shape === "Square") {
            outputShape = new Square(data.logo_text, data.shape_color, data.text_color)
        }
        else if(shape === "Circle") {
            outputShape = new Circle(data.logo_text, data.shape_color, data.text_color)
        }
        createSvg("./dist/logo.svg", outputShape)
    })
}

init()


