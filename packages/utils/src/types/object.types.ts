/**
 * A dictionary object.
 */
export type Dict<T = any> = Record<string, T>;

/**
 * A literal union type.
 */
export type Assign<T, U> = Omit<T, keyof U> & U;

export type Optional<T, U extends keyof T> = Omit<T, U> & Partial<Pick<T, U>>;

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
  K5 extends RecordKey = RecordKey
> = Record<
  K1 | RecordKey,
  Value | Record<K2 | RecordKey, Value | Record<K3 | RecordKey, Value | Record<K4 | RecordKey, Value | Record<K5 | RecordKey, Value>>>>
>;

export type DeepRecordCopy<T extends DeepRecord<any>, Value> = {
  [K in keyof T]: T[K] extends DeepRecord<any> ? DeepRecordCopy<T[K], Value> : Value;
};
