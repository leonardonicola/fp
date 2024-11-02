import { filter } from "@/lib";

describe("filter", () => {
  it("should filter elements correctly based on the fn return", () => {
    expect(
      filter([10, "It", 2, "Works", 51], (elem) => !Number.isInteger(elem))
    ).toEqual(["It", "Works"]);
    expect(filter([1, 2, 3, 4, 5], (elem) => !Number.isInteger(elem))).toEqual(
      []
    );
  });

  it("should throw TypeError when no array provided", () => {
    //@ts-expect-error
    expect(() => filter()).toThrowError("No array provided");
  });
  it("should return the original array if no function provided", () => {
    expect(filter([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("should throw TypeError if function provided doesn't return a boolean", () => {
    //@ts-expect-error
    expect(() => filter([1, 2, 3], () => "well")).toThrowError(
      "Invalid conditional function! It needs to return a boolean"
    );
  });
});
