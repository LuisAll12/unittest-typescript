import { standardDeviation } from "./standardDeviation";

test("standard deviation of an empty array should throw an error", () => {
    expect(() => standardDeviation([])).toThrow("Cannot calculate standard deviation of empty array");
});

test("standard deviation of a single-element array is 0", () => {
    expect(standardDeviation([1])).toBe(0);
});

test("standard deviation of [1, 3] is 1", () => {
    expect(standardDeviation([1, 3])).toBe(1);
});

test("standard deviation of [1, 5] is 2", () => {
    expect(standardDeviation([1, 5])).toBe(2);
});

test("standard deviation of [1, 2, 3, 4, 5] is approximately 1.414", () => {
    const result = standardDeviation([1, 2, 3, 4, 5]);
    expect(result).toBeGreaterThan(1.41);
    expect(result).toBeLessThan(1.42);
});
