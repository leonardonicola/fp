import { reduce } from "@/lib";

describe("reduce", () => {
  beforeAll(() => {
    console.log(
      [1, 2, 3, 4].reduce((_prev, curr, idx, arr) => {
        console.log(idx, arr);
        return curr + _prev;
      }, 0)
    );
  });
  it("should reduce an array of numbers to their sum with an initial value", () => {
    const result = reduce([1, 2, 3, 4], (prev, curr) => prev + curr, 0);
    expect(result).toBe(10);
  });

  it("should reduce an array of numbers to their sum without an initial value", () => {
    const result = reduce([1, 2, 3, 4], (prev, curr) => prev + curr);
    expect(result).toBe(10);
  });

  it("should reduce an array of strings to a concatenated string with an initial value", () => {
    const result = reduce(["a", "b", "c"], (prev, curr) => prev + curr, "");
    expect(result).toBe("abc");
  });

  it("should reduce an array of strings to a concatenated string without an initial value", () => {
    const result = reduce(["a", "b", "c"], (prev, curr) => prev + curr);
    expect(result).toBe("abc");
  });

  it("should handle an empty array with an initial value", () => {
    const result = reduce([], (prev, curr) => prev + curr, 0);
    expect(result).toBe(0);
  });

  it("should reduce an array of objects to a single object based on a key", () => {
    const arr = [{ count: 1 }, { count: 2 }, { count: 3 }];
    const result = reduce(
      arr,
      (prev, curr) => ({ count: prev.count + curr.count }),
      { count: 0 }
    );
    expect(result).toEqual({ count: 6 });
  });

  it("should handle boolean reduction (AND operation) with an initial value", () => {
    const arr = [true, true, false];
    const result = reduce(arr, (prev, curr) => prev && curr, true);
    expect(result).toBe(false);
  });

  it("should throw TypeError when no array provided", () => {
    //@ts-expect-error
    expect(() => reduce()).toThrowError("No array provided");
  });
  it("should throw TypeError empty array and no initial value provided", () => {
    //@ts-expect-error
    expect(() => reduce([])).toThrowError(
      "Empty array without any initial val"
    );
  });

  it("should handle boolean reduction (AND operation) without an initial value", () => {
    const arr = [true, true, true];
    const result = reduce(arr, (prev, curr) => prev && curr);
    expect(result).toBe(true);
  });

  it("should handle single-element array without an initial value", () => {
    const result = reduce([42], (prev, curr) => prev + curr);
    expect(result).toBe(42);
  });
});
