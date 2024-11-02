type GenericFn = (...args: any[]) => any;
type Args<T extends GenericFn> = T extends (...args: infer S) => any
  ? S
  : never;
type Param<T extends (param: any) => any> = T extends (param: infer P) => any
  ? P
  : never;
type Return<T extends GenericFn> = T extends (...args: any[]) => infer S
  ? S
  : never;
type First<T extends any[]> = T extends [infer F, ...infer _] ? F : never;
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

export type { Args, Param, GenericFn, Last, First, Return };
