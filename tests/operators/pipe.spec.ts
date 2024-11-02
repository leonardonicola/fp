import { describe, it, expect } from "vitest";
import { pipe } from "@/lib";

describe("pipe", () => {
  it("should transform a number through a series of operations", async () => {
    const result = await pipe(5)
      .pipe((x) => x + 3) // 5 + 3 = 8
      .pipe((x) => x * 2) // 8 * 2 = 16
      .run();
    expect(result).toBe(16);
  });

  it("should work with string transformations", async () => {
    const result = await pipe("hello")
      .pipe((str) => str.toUpperCase()) // "hello" -> "HELLO"
      .pipe((str) => str + " WORLD") // "HELLO" + " WORLD" = "HELLO WORLD"
      .run();
    expect(result).toBe("HELLO WORLD");
  });

  it("should work with boolean transformations", async () => {
    const result = await pipe(true)
      .pipe((bool) => !bool) // true -> false
      .pipe((bool) => bool || true) // false || true = true
      .run();
    expect(result).toBe(true);
  });

  it("should allow chaining with different types", async () => {
    const result = await pipe(5)
      .pipe((num) => num.toString()) // number to string "5"
      .pipe((str) => str + " apples") // "5" + " apples" = "5 apples"
      .pipe((str) => str.length) // "5 apples" length = 8
      .run();
    expect(result).toBe(8);
  });

  it("should work with object transformations", async () => {
    const result = await pipe({ count: 1 })
      .pipe((obj) => ({ ...obj, count: obj.count + 1 })) // { count: 2 }
      .pipe((obj) => ({ ...obj, count: obj.count * 3 })) // { count: 6 }
      .run();
    expect(result).toEqual({ count: 6 });
  });

  it("should correctly handle an empty pipeline and return the initial value", async () => {
    const initialValue = 42;
    const result = await pipe(initialValue).run();
    expect(result).toBe(initialValue);
  });

  it("should handle transformations with null and undefined", async () => {
    const result = await pipe(null)
      .pipe((val) => (val === null ? "is null" : "not null")) // "is null"
      .run();
    expect(result).toBe("is null");

    const result2 = await pipe(undefined)
      .pipe((val) => (val === undefined ? "is undefined" : "not undefined")) // "is undefined"
      .run();
    expect(result2).toBe("is undefined");
  });

  it("should work with array transformations", async () => {
    const result = await pipe([1, 2, 3])
      .pipe((arr) => arr.map((x) => x * 2)) // [2, 4, 6]
      .pipe((arr) => arr.reduce((acc, x) => acc + x, 0)) // 2 + 4 + 6 = 12
      .run();
    expect(result).toBe(12);
  });

  it("should allow asynchronous transformations using promises", async () => {
    const result = await pipe(10)
      .pipe(async (num) => num * 2) // 10 * 2 = 20
      .pipe(async (num) => num + 5) // 20 + 5 = 25
      .run();
    expect(result).toBe(25);
  });
});
