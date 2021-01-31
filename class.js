// Create a polygon with side lengths 3, 4, and 5
// let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
// console.log(triangle.perimeter());

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */


function Polygon (sideLengthsArray) {
  this.lengths = sideLengthsArray
}

Polygon.prototype.perimeter = function() {
  return this.lengths.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
  }, 0)
}

let triange = new Polygon([10, 12, 3]);
console.log(triange.perimeter());