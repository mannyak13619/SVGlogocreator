class Shapes {
    constructor( shapeColor, text, textColor ) {
      console.log('shapeColor', shapeColor)
      console.log('text', text)
      console.log('textColor', textColor)
      this.shapeColor= shapeColor;
      this.text= text;
      this.textColor= textColor;
    }
}
    class Triangle extends Shapes {
      render() {
          return `<svg version="1.1"
       width="300" height="300"
       xmlns="http://www.w3.org/2000/svg">
       <polygon points="60, 30 180, 270 300, 30" fill="${this.shapeColor}" />
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
       </svg>`
      }
  }
  class Square extends Shapes {
    render() {
        return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">
     <rect width="300" height="300" fill="${this.shapeColor}" />
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     </svg>`
    }
}

    
  
  class Circle extends Shapes {
    
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`
    }
  }
  module.exports = {Triangle,Square,Circle}
