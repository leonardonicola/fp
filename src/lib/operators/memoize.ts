import { Args } from "@/lib";

/**
 * Caches a function result based on its **arguments**.
 *
 * @template T - Type of the function
 * @param fn - The function that will be memoized
 *
 * @example
 * const slowFunction = (num: number) => {
 *   // Simulate a slow calculation
 *   for (let i = 0; i < 1e9; i++) {}
 *   return num * 2;
 * };
 *
 * const memoizedFunction = memoize(slowFunction);
 * console.log(memoizedFunction(2)); // Slow on first call
 * console.log(memoizedFunction(2)); // Fast on second call
 */
function memoize<T extends (...args: any[]) => any>(fn: T) {
  const cache = new Map<string, ReturnType<T>>();

  return function (...args: Args<T>): ReturnType<T> {
    const stringifiedArgs = JSON.stringify(args);
    const cachedRes = cache.get(stringifiedArgs);
    if (cachedRes) {
      return cachedRes;
    }
    const res = fn(...args);
    cache.set(stringifiedArgs, res);
    return res;
  };
}

export { memoize };
