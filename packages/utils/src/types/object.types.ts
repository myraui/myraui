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

/**
 * Nested record of values
 *
 * Depth: 5
 */
export type DeepRecord<
  Value,
  K1 extends RecordKey = RecordKey,
  K2 extends RecordKey = RecordKey,
  K3 extends RecordKey = RecordKey,
  K4 extends RecordKey = RecordKey,
  K5 extends RecordKey = RecordKey,
  V2 = Value,
  V3 = Value,
  V4 = Value,
  V5 = Value
> = Record<K1 | RecordKey, Value | Record<K2 | RecordKey, V2 | Record<K3 | RecordKey, V3 | Record<K4 | RecordKey, V4 | Record<K5 | RecordKey, V5>>>>>;

export type DeepRecordCopy<T, Value = any> = T extends Record<any, any>
  ? {
      [K in keyof T]: T[K] extends Record<any, any> ? DeepRecordCopy<T[K], Value> : Value;
    }
  : unknown;
