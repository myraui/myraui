import { Dict } from '@myraui/shared-utils';
import * as R from 'fp-ts/Record';
import { pipe } from 'fp-ts/function';
import * as S from 'fp-ts/Separated';

type PropsAndVariants<T, K extends keyof T> = { props: Omit<T, K> | T; variantProps: Pick<T, K> | Dict };

export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
  props: T,
  variantKeys: K[] = [],
  removeVariantProps = true
): PropsAndVariants<T, K> => {
  return pipe(
    props,
    R.partitionWithIndex((key) => variantKeys.includes(key as K)),
    S.mapLeft((left) => (removeVariantProps ? left : props)),
    (separated) => ({ props: separated.left, variantProps: separated.right })
  ) as PropsAndVariants<T, K>;
};
