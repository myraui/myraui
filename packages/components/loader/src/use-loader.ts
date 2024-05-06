import { useVariantComponent, VariantComponentProps } from '@myraui/system';
import type { LoaderVariantProps } from '@myraui/theme';
import { loader } from '@myraui/theme';

interface Props extends VariantComponentProps<typeof loader> {}

export type UseLoaderProps = Props & LoaderVariantProps;

export function useLoader(originalProps: UseLoaderProps) {
  return useVariantComponent(originalProps, loader);
}

export type UseLoaderReturn = ReturnType<typeof useLoader>;
