import { compose } from "@/lib/operators/compose";

describe("compose", () => {
  function stubToString(val: unknown): string {
    return String(val);
  }

  function stubIncrement(val: number): number {
    return ++val;
  }

  function stubDouble(val: number): number {
    return val * 2;
  }

  function stubBoolean(val: string): boolean {
    return val === "true";
  }

  it("should return correct values with two functions", () => {
    const incrementThenString = compose(stubToString, stubIncrement);
    expect(incrementThenString(2)).toEqual("3");
  });

  it("should throw TypeError when no callback function provided", () => {
    expect(() => compose()).toThrowError(
      "No functions provided to start composition"
    );
  });

  it("should handle multiple functions", () => {
    const doubleIncrementThenString = compose(
      stubToString,
      stubIncrement,
      stubDouble
    );
    expect(doubleIncrementThenString(2)).toEqual("5");
  });

  it("should handle functions with different return types", () => {
    const toBooleanString = compose(stubToString, stubBoolean);
    expect(toBooleanString("true")).toEqual("true");
    expect(toBooleanString("false")).toEqual("false");
  });

  it("should handle a single function", () => {
    const justIncrement = compose(stubIncrement);
    expect(justIncrement(2)).toEqual(3);
  });

  it("should infer the correct return type", () => {
    const incrementThenString = compose(stubToString, stubIncrement);
    // TypeScript should catch if the return type of compose is incorrect
    expectTypeOf(incrementThenString).parameter(0).toBeNumber();
    expectTypeOf(incrementThenString).returns.toBeString();
  });
});
