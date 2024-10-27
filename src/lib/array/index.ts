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
): T | U {
  if (arr.length === 0 && !initialVal) {
    throw new TypeError("Empty array with no initial val");
  }

  let currArr = (initialVal ?? arr[0]) as T | U;

  for (let i = 1; i < arr.length; i++) {
    currArr = fn(currArr, arr[i] as T, i, arr);
  }
  return currArr;
}

function map<T>(arr: T[], fn: (num: T, index: number, arr: T[]) => T): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i] as T, i, arr));
  }
  return newArr;
}

function filter<T>(
  arr: T[],
  fn: (num: T, index: number, arr: T[]) => boolean,
): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i] as T, i, arr)) {
      newArr.push(arr[i] as T);
    }
  }
  return newArr;
}

export { filter, map, reduce };
