type Booleanish = boolean | 'true' | 'false';

/**
 * Returns a boolean attribute value based on the condition
 * @param condition
 */
export function dataAttr(condition: boolean | undefined) {
  return (condition ? 'true' : undefined) as Booleanish;
}
