import { mean, median } from "./average";

// Mean
test("mean of two numbers", () => {
  const numbers = [4, 6];
  const expected = 5;
  const result = mean(numbers);
  expect(result).toBe(expected);
});

test("mean of five numbers", () => {
  const numbers = [2, 4, 6, 8, 10];
  const expected = 6;
  const result = mean(numbers);
  expect(result).toBe(expected);
});

// Median
test("median for odd number of elements", () => {
  const numbers = [13, 1, 9, 3, 7, 11, 5];
  const expected = 7;
  const result = median(numbers);
  expect(result).toBe(expected);
});

test("median for even number of elements", () => {
  const numbers = [11, 1, 9, 3, 7, 5];
  const expected = 6;
  const result = median(numbers);
  expect(result).toBe(expected);
});

test("median for no elements", () => {
  expect(() => median([])).toThrow("Cannot calculate median of empty array");
});