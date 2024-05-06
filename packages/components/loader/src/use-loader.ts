import type { LoaderSlots, LoaderVariantProps, SlotsToClasses } from '@myraui/theme';
import { loader } from '@myraui/theme';
import { mapPropsVariants, useDOMRef } from '@myraui/react-utils';
import { Ref, useMemo } from 'react';
import { HTMLMyraProps } from '@myraui/system';

interface Props extends HTMLMyraProps<'div'> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement | null>;

  classNames?: SlotsToClasses<LoaderSlots>;
}

export type UseLoaderProps = Props & LoaderVariantProps;

export function useLoader(originalProps: UseLoaderProps) {
  const { props, variantProps } = mapPropsVariants(originalProps, loader.variantKeys);

  const { ref, as, className, ...otherProps } = props;

  const Component = as || 'div';

  const domRef = useDOMRef(ref);

  const styles = useMemo(() => loader({ ...variantProps, className }), [...Object.values(variantProps), className]);

  return { Component, styles, domRef, ...otherProps };
}

export type UseLoaderReturn = ReturnType<typeof useLoader>;
