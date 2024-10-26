[0, 1, 3, 2, 2].reduce((prev, curr) => prev + curr);

// Function overload
function reduce<T, U>(
  arr: T[],
  fn: (prevVal: U, currVal: T, idx: number, arr: T[]) => U,
  initialVal: U,
): U;
function reduce<T>(
  arr: T[],
  fn: (prevVal: T, currVal: T, idx: number, arr: T[]) => T,
): T;
function reduce<T, U>(
  arr: T[],
  fn: (prevVal: T | U, currVal: T, idx: number, arr: T[]) => T | U,
  initialVal?: T | U,
): U | T {
  if (arr.length === 0 && !initialVal) {
    throw new TypeError("Reduce of empty array with no initial val");
  }

  let currArr: T | U = initialVal ?? arr[0];

  for (let i = 1; i < arr.length; i++) {
    currArr = fn(currArr, arr[i], i, arr);
  }
  return currArr;
}

function map<T>(arr: T[], fn: (num: T, index: number, arr: T[]) => T): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
}

function filter<T>(
  arr: T[],
  fn: (num: T, index: number, arr: T[]) => boolean,
): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function pipe<T>(initialValue: T) {
  let value = initialValue;

  const chain = {
    pipe<U>(fn: (value: T) => U) {
      value = fn(value);
      return chain as unknown as ReturnType<typeof pipe<U>>;
    },
    run() {
      return value;
    },
  };

  return chain;
}

export { pipe, filter, map, reduce };
