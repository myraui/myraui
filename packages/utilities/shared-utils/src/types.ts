/**
 * A dictionary object.
 */
export type Dict<T = any> = Record<string, T>;

/**
 * A literal union type.
 */
export type Assign<T, U> = Omit<T, keyof U> & U;

export type Optional<T, U extends keyof T> = Omit<T, U> & Partial<Pick<T, U>>;

export type StringOrNumber = string | number;

export type RecordKey = string | number | symbol;

export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;
