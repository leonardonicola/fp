import { pipe, map, filter, reduce } from "@fp/utils";

console.log("PIPE ->", pipe(Date.now()).run(), "\n");

console.log(
  "MAP ->",
  map([0, 3, 1, 3, 1, 23], (num, idx, arr) => {
    return (arr[idx] ?? num) - 2;
  }),
  "\n",
);

console.log(
  "FILTER ->",
  filter([0, 3, 1, 3, 1, 23], (num, idx, arr) => {
    return (arr[idx] ?? num) % 2 === 1;
  }),
  "\n",
);

console.log(
  "REDUCE ->",
  reduce([[]], (_prev, curr) => curr, [2, 3, 1, 2, 3]),
  "\n",
);
