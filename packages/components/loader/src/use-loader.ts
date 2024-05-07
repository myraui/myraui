import { useMyraComponent, MyraComponentProps } from '@myraui/system';
import type { LoaderVariantProps } from '@myraui/theme';
import { loader } from '@myraui/theme';

interface Props extends MyraComponentProps<typeof loader> {
  /**
   * Spinner label, in case you passed it will be used as `aria-label`.
   */
  label?: string;
}

export type UseLoaderProps = Props & LoaderVariantProps;

export function useLoader(originalProps: UseLoaderProps) {
  return useMyraComponent(originalProps, loader);
}

export type UseLoaderReturn = ReturnType<typeof useLoader>;
