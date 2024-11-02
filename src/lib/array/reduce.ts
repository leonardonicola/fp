import { start } from "repl";

/**
 *
 * @template T - Type of elements in the array.
 * @template U - Type of the accumulated result (optional).
 *
 * @param {T[]} arr - The array to reduce.
 * @param {(prevVal: U | T, currVal: T, idx: number, arr: T[]) => U | T} fn - Reducer function that takes the accumulator, current element, index, and the array.
 * @param {U} [initialVal] - Optional initial value for the accumulator.
 *
 * @returns {U | T} The accumulated result, either of type `U` if an initial value is given, or `T` otherwise.
 *
 * @throws {TypeError} - Throws if the array is empty and no initial value is provided.
 *
 * @example
 * // Sum with initial value
 * reduce([1, 2, 3], (acc, val) => acc + val, 0); // returns 6
 *
 * // Sum without initial value
 * reduce([1, 2, 3], (acc, val) => acc + val); // returns 6
 *
 * // Concatenate strings
 * reduce(['a', 'b', 'c'], (acc, val) => acc + val, ''); // returns 'abc'
 */
function reduce<T, U>(
  arr: T[],
  fn: (prevVal: U, currVal: T, idx: number, arr: T[]) => U,
  initialVal: U
): U;
function reduce<T>(
  arr: T[],
  fn: (prevVal: T, currVal: T, idx: number, arr: T[]) => T
): T;
function reduce<T, U>(
  arr: T[],
  fn: (prevVal: T | U, currVal: T, idx: number, arr: T[]) => T | U,
  initialVal?: T | U
): T | U {
  if (!arr) {
    throw TypeError("No array provided");
  }
  if (initialVal === undefined && arr.length === 0) {
    throw TypeError("Empty array without any initial val");
  }

  let prev: T | U = initialVal !== undefined ? initialVal : arr[0];

  const startIdx = initialVal !== undefined ? 0 : 1;

  for (let i = startIdx; i < arr.length; i++) {
    prev = fn(prev, arr[i], i, arr);
  }

  return prev;
}

export { reduce };
