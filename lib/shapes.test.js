// Below are the constants for the shape classes
const { Square, Triangle, Circle } = require("./shapes.js");

// Test Script for a square that reanders color to YELLOW
describe("Square test", () => {
  test("test for a square with a yellow background", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="200" height="100" fill="yellow" />'
    );
  });
});

// Test Script for a triangle that renders color to RED
describe("Triangle test", () => {
    test("test for a triangle with a red background", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
      );
    });
  });

// Test Script for a circle that renders the color to GOLD (Metallic) with an hexadecimal code clear #d4af37
describe("Circle test", () => {
  test("test for a circle with a #d4af37 background", () => {
    const shape = new Circle();
    shape.setColor("#d4af37");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="#d4af37" />'
    );
  });
});