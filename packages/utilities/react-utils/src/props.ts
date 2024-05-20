import * as R from 'fp-ts/Record';
import { pipe } from 'fp-ts/function';
import * as S from 'fp-ts/Separated';

type PropsAndVariants<T, K extends keyof T, R extends boolean> = { props: R extends true ? Omit<T, K> : T; variantProps: Pick<T, K> };

/**
 * Separates props and variant props from the given props object.
 * @param props - The props object.
 * @param variantKeys - The keys of the variant props.
 * @param removeVariantProps - Whether to remove the variant props from the props object.
 * @returns The separated props and variant props.
 */
export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
  props: T,
  variantKeys: K[] = [],
  removeVariantProps = true
): PropsAndVariants<T, K, typeof removeVariantProps> => {
  return pipe(
    props,
    R.partitionWithIndex((key) => variantKeys.includes(key as K)),
    S.mapLeft((left) => (removeVariantProps ? left : props)),
    (separated) => ({ props: separated.left, variantProps: separated.right })
  ) as PropsAndVariants<T, K, typeof removeVariantProps>;
};
