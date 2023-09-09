class Circle {
    #radius;

    constructor(x, y, radius, firstRadians, degrees) {
        this.x = x;
        this.y = y;
        this.#radius = radius;
        this.firstRadians = firstRadians;
        this.degrees = degrees;
    }

    canvas() {
        let canv = document.querySelector('#canvas');
        let ctx = canv.getContext('2d');

        ctx.arc(this.x, this.y, this.#radius, this.firstRadians, this.radians(this.degrees));
        ctx.stroke();
    }

    radians(degrees) {
        return (Math.PI / 180) * degrees;
    }

    square() {
        return this.#radius ** 2 * Math.PI;
    }

    lengthCirc() {
        return 2 * this.#radius * Math.PI;
    }
}

let circle1 = new Circle(150, 150, 75, 0, 360);
circle1.canvas();

let circle2 = new Circle(150, 150, 100, 0, 360)
circle2.canvas();
console.log(circle2.lengthCirc());

let circle3 = new Circle(150, 150, 150, 0, 360)
circle3.canvas();
console.log(circle3.square());