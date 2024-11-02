import { First, GenericFn, Last, Param, Return } from "../interfaces";

type LastFn<T extends Array<(args: any) => any>> = Last<T>;

/**
 * Composes a series of functions from **right** to **left**.
 *
 * @param fns - Functions to be composed, where each function's output
 * type matches the input type of the previous one.
 *
 * @returns A function that applies the composed functions in sequence
 * and returns the result.
 *
 * @throws {TypeError} If no functions are provided.
 *
 */
function compose<T extends Array<GenericFn>>(...fns: T) {
  if (fns.length === 0) {
    throw TypeError("No functions provided to start composition");
  }

  function composition<S extends Param<LastFn<T>>>(
    arg: S
  ): ReturnType<First<T>> {
    let result: S = arg;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }

    return result as Return<First<T>>;
  }

  return composition;
}

export { compose };
export type { LastFn };
