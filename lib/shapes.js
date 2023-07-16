class Shape {
      constructor() {
        this.color = "";
      }
      setColor(shapeColor) {
        this.color = shapeColor;
      }
    }
    
    class Square extends Shape {
      render() {
        //THIS SETS THE POSITION, SIZE AND FILL COLOR OF THE RECTANGLE
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
      }
    }
    
    class Triangle extends Shape {
      render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
    }
    
    class Circle extends Shape {
      render() {
        //THIS SETS THE POSITION, SIZE AND FILL COLOR OF THE RECTANGLE
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
      }
    }
    
    module.exports = { Square, Triangle, Circle };