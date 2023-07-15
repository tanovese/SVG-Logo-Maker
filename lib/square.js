const Shape = require('./shape')

class Square extends Shape {
    constructor(logo_text, shape_color, text_color) {
        super(logo_text, shape_color)
        this.textColor = text_color
    }

    render() {
        return `<svg version= "1.1" height="100" width="100" xmlns= "http://www.w3.org/2000/svg">
        <rect x="120" width="100" height="100" fill="${this.shapeColor}"/>
        <text x="150" y="150" fill="${this.textColor}">${this.logoText}</text>
      </svg>`
    }
}

module.exports = Square