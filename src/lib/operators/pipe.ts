interface PipeChain<M> {
  pipe: Pipe<M>;
  run: () => M;
}

type PipeCb<V, S> = (arg: V) => S;

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
  let value: any = initialValue;

  const chain: PipeChain<T> = {
    pipe<S>(fn: PipeCb<T, S>) {
      value = fn(value);
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
