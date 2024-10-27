function pipe<T>(initialValue: T) {
  let value = initialValue;

  const chain = {
    pipe<U extends T>(fn: (value: T) => U) {
      value = fn(value);
      return chain as unknown as ReturnType<typeof pipe<U>>;
    },
    run() {
      return value;
    },
  };

  return chain;
}

export { pipe };
