class Circle {
  constructor(rad, clr) {
    this.rad = rad;
    this.clr = clr;
  }
  setrad(rad) {
    this.rad = rad;
  }
  getrad() {
    return this.rad;
  }
  setclr(clr) {
    this.clr = clr;
  }
  getclr() {
    return this.clr;
  }
  getArea() {
    let Pi = 3.14;
    return Pi * this.rad * this.rad;
  }
  getCirc() {
    let Pi = 3.14;
    return 2 * Pi * this.rad;
  }
  toString() {
    return "Circle[rad =" + this.rad + ",clr =" + this.clr + "]";
  }
}

var circle = new Circle(2, "red");
circle.setrad(6);
console.log("New rad:" + circle.getrad());
console.log("clr:" + circle.getclr());
console.log("Area:" + circle.getArea());
console.log("circumference" + circle.getCirc());
console.log("New Area:" + circle.getArea());
console.log("toString" + circle.toString());
