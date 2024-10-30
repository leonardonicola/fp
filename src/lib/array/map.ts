/**
 * @template T - Type of elements in the array.
 * @param arr - The array to map over.
 * @param fn - Mapping function that takes the current element, index, and the entire array, and returns the transformed element.
 *
 * @returns A new array with each element transformed by the mapping function.
 *
 * @example
 * // Doubling numbers
 * map([1, 2, 3], (num) => num * 2); // returns [2, 4, 6]
 *
 * // Mapping to strings
 * map([1, 2, 3], (num, idx) => `Number ${num} at index ${idx}`); // returns ["Number 1 at index 0", "Number 2 at index 1", "Number 3 at index 2"]
 */
function map<T>(arr: T[], fn: (num: T, index: number, arr: T[]) => T): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i] as T, i, arr));
  }
  return newArr;
}

export { map };
