const Shape = require('./shape')

class Circle extends Shape {
    constructor(logo_text, shape_color, text_color) {
        super(logo_text, shape_color)
        this.textColor = text_color
    }

    render() {
        return `<svg version= "1.1" height="300" width="300" xmlns= "http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.shapeColor}" />
        <text x="140" y="110" fill="${this.textColor}">${this.logoText}</text>
      </svg>`
    }
}

module.exports = Circle