import { average } from "./average";

test("average of [2, 4, 6] is 4", () => {
  const input = [2, 4, 6];
  const expected = 4;
  const result = average(input);
  expect(result).toBe(expected);
});

test("average of [10] is 10", () => {
  const input = [10];
  const expected = 10;
  const result = average(input);
  expect(result).toBe(expected);
});

test("average of empty array throws error", () => {
  expect(() => average([])).toThrow("Cannot calculate average of empty array");
});
