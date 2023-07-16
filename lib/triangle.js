const Shape = require('./shape')

class Triangle extends Shape {
    constructor(logo_text, shape_color, text_color) {
        super(logo_text, shape_color)
        this.textColor = text_color
    }

    render() {
        return `<svg version= "1.1" height="300" width="500" xmlns= "http://www.w3.org/2000/svg">
        <polygon points="250,60 100,400 400,400" fill="${this.shapeColor}" class="triangle" />
        <text x="240" y="230" fill="${this.textColor}">${this.logoText}</text>
      </svg>`
    }
}

module.exports = Triangle