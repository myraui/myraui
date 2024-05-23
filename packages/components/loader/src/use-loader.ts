import { MyraComponentProps, useMyraComponent } from '@myraui/system';
import type { TextOnlyColorScheme, LoaderVariantProps } from '@myraui/theme';
import { loader } from '@myraui/theme';
import { useMemo } from 'react';

interface Props extends MyraComponentProps<typeof loader> {
  /**
   * Spinner label, in case you passed it will be used as `aria-label`.
   */
  label?: string;
}

export type UseLoaderProps = Props & LoaderVariantProps;

export function useLoader(originalProps: UseLoaderProps) {
  const {
    componentProps: { label, ...props },
    ...rest
  } = useMyraComponent({ ...originalProps, colorSchemeIsText: true }, loader);

  const ariaLabel = useMemo(() => {
    if (label || props.children) return label || props.children;

    return !props['aria-label'] ? 'Loading' : '';
  }, [label, props.children, props['aria-label']]);

  return { ...rest, componentProps: { 'aria-label': ariaLabel, label, ...props } };
}

export type UseLoaderReturn = ReturnType<typeof useLoader>;
