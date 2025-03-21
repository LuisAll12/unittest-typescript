import { mean } from "./average";

test("mean of two numbers", () => {
  const numbers = [4, 6];  // Zahlen geändert
  const expected = 5;      // Erwartungswert angepasst (4 + 6) / 2 = 5
  const result = mean(numbers);
  expect(result).toBe(expected);
});

