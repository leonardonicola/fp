import { map } from "@/lib";

describe("map", () => {
  it("should map elements correctly based on the fn return", () => {
    expect(map([1, 2, 3, 4, 5], (elem) => elem + 1)).toEqual([2, 3, 4, 5, 6]);

    expect(
      map([1, 2, { num: 1 }, [1, 2, 3]], (elem) => ({ num: elem }))
    ).toEqual([
      { num: 1 },
      { num: 2 },
      { num: { num: 1 } },
      { num: [1, 2, 3] },
    ]);

    expect(map([1, 2, 3], () => "well")).toEqual(["well", "well", "well"]);

    expect(
      map([10, [[1, 2, 3]], {}, "It Works", new Uint8Array()], (elem) =>
        elem.toString()
      )
    ).toEqual(["10", "1,2,3", "[object Object]", "It Works", ""]);
  });

  it("should always return an array with the exact same length of the original one", () => {
    expect(map([undefined, undefined]).length).toEqual(2);
    expect(map([null, null]).length).toEqual(2);
    expect(map([() => {}, {}]).length).toEqual(2);
  });

  it("should throw TypeError when no array provided", () => {
    //@ts-expect-error
    expect(() => map()).toThrowError("No array provided");
  });
  it("should return the original array if no function provided", () => {
    expect(map([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
