class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getSquare() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    getRatio() {
        return this.getSquare() / this.getPerimeter();
    }
}

let rectangle = new Rectangle(100, 200);

console.log(rectangle.getSquare());
console.log(rectangle.getPerimeter());
console.log(rectangle.getRatio());