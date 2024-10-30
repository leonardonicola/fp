/**
 * @template T - Type of elements in the array.
 * @param arr - The array to map over.
 * @param fn - Mapping function that takes the current element, index, and the entire array, and returns the transformed element.
 * @returns The filtered array
 *
 * @example
 * // Doubling numbers
 * filter([1, 2, 3], (num) => num % 2 === 0); // returns [2]
 */
function filter<T>(
  arr: T[],
  fn: (num: T, index: number, arr: T[]) => boolean
): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i] as T, i, arr)) {
      newArr.push(arr[i] as T);
    }
  }
  return newArr;
}

export { filter };
