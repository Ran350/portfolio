// eslint-disable-next-line @typescript-eslint/ban-types
export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};
