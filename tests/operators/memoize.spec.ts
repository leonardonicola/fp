import { memoize } from "@/lib";

describe("memoize", () => {
  function fib(num: number): number {
    if (num < 2) return 1;
    return fib(num - 1) + fib(num - 2);
  }

  it("should return correct result", () => {
    const memoized = memoize(fib);
    expect(memoized(2)).toBe(2);
    expect(memoized(2)).toBe(2);
  });
});
