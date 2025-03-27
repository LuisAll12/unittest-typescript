import { mode } from "./mode";

test("mode of a single-element array", () => {
    expect(mode([1])).toEqual([1]);
});

test("mode of an array with repeated numbers", () => {
    expect(mode([1, 1])).toEqual([1]);
    expect(mode([1, 1, 2])).toEqual([1]);
    expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
    expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]);
    expect(mode([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(mode([1, 1, 2, 2, 3, 3, 3])).toEqual([3]);
    expect(mode([1, 1, 2, 2, 3, 3, 3, 3])).toEqual([3]);
});

test("mode of an empty array should throw an error", () => {
    
});
