import { add, subtract, multiply, divide} from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply five by seven is thirty-five", () => {
  // Arrange
  const a: number = 5;
  const b: number = 7;
  const expected: number = 35;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide ten by two is five", () => {
  const a: number = 10;
  const b: number = 2;
  const expected: number = 5;
  const actual: number = divide(a, b);
  expect(actual).toBe(expected);
});

test("division by zero should throw an error", () => {
  const dividend: number = 10;
  const divisor: number = 0;

  expect(() => divide(dividend, divisor)).toThrow("Division by zero is not allowed");
});