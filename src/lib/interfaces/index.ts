type ExtractArgsType<T> = T extends (...args: infer S) => any ? S : unknown;

export type { ExtractArgsType };
