/**
 * @template T - Type of elements in the array.
 * @param arr - The array to map over.
 * @param fn - Mapping function that takes the current element, index, and the entire array, and returns the transformed element.
 * @returns The filtered array
 * @throws TypeError("No array provided")
 * @throws TypeError("Invalid conditional function! It needs to return a boolean")
 *
 * @example
 * // Doubling numbers
 * filter([1, 2, 3], (num) => num % 2 === 0); // returns [2]
 */
function filter<T>(
  arr: T[],
  fn?: (val: T, index: number, arr: T[]) => boolean
): T[] {
  if (!arr) throw TypeError("No array provided");
  if (!fn) return arr;
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const res = fn(arr[i], i, arr);
    if (typeof res !== "boolean") {
      throw TypeError(
        "Invalid conditional function! It needs to return a boolean"
      );
    }
    if (res) {
      newArr.push(arr[i] as T);
    }
  }
  return newArr;
}

export { filter };
