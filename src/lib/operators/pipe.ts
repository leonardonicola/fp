interface PipeChain<M> {
  pipe: Pipe<M>;
  run: () => M extends Promise<infer U> ? Promise<U> : M;
}

type PipeCb<V, S> = (arg: V) => S | Promise<S>;

type Pipe<V> = <S>(fn: PipeCb<V, S>) => PipeChain<S>;

/**
 * Initialize the method with a value and transform it with a
 * *chain of responsabilities* approach
 *
 * @param initialValue - *Well...*
 * @returns A chainable object with `.pipe()` and `.run()`
 *
 * @example
 * const result = pipe(5)
 *   .pipe(x => x + 3)
 *   .pipe(x => x * 2)
 *   .run(); // result is 16
 */
const pipe = <T>(initialValue: T): PipeChain<T> => {
  let value: any = Promise.resolve(initialValue);

  const chain: PipeChain<T> = {
    pipe<S>(fn: PipeCb<T, S>) {
      value = value.then(fn);
      return chain as unknown as PipeChain<S>;
    },
    run() {
      return value;
    },
  };

  return chain;
};

export { pipe };
export type { PipeChain, Pipe, PipeCb };
