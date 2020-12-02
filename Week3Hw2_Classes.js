/*
class Circle{
    constructor(sides,radius){
        this.sides = sides;
        this.radius = radius;
    }
    total_sides(){
        console.log(this.sides, `Do circles have sides? -.-`);
    }
    total_area(){
        let area = (this.radius ** 2) * 3.14;
        console.log(area);
    }
}
const newCircle = new Circle(0, 4)
newCircle.total_sides();
newCircle.total_area();
*/
/*
class Rectangle {
    constructor(sides, height, width){
        this.sides = sides;
        this.height = height;
        this.width = width;
    }
    total_sides(){
        console.log(this.sides);
    }
    total_area(){
        let area = this.height * this.width;
        console.log(`This is the area: ${area}`);
    }
}
const newRectangle = new Rectangle(4, 10, 20)
newRectangle.total_sides();
newRectangle.total_area();
*/


class Square{
    constructor(sides, length){
        this.sides = sides;
        this.length = length;
    }
    total_sides(){
        console.log(this.sides);
    }
    total_area(){
        let area = this.length * this.length;
        console.log(`This is the area: ${area}`);
    }
}
const newSquare = new Square(4, 7);
newSquare.total_sides();
newSquare.total_area();



