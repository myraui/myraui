import type { IconVariantProps } from '@myraui/theme';
import { icon } from '@myraui/theme';
import { HTMLMyraProps, useMyraComponent } from '@myraui/system';
import React, { Ref } from 'react';
import { fallbackIcon } from './fallback-icon';

interface Props extends HTMLMyraProps<'svg'> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<SVGElement | null>;
}

export type UseIconProps = Props & IconVariantProps;

export function useIcon(originalProps: UseIconProps) {
  const {
    componentProps: { children, viewBox, ...props },
    ...rest
  } = useMyraComponent({ ...originalProps, colorSchemeIsText: true }, icon, 'svg');

  const _path = (children ?? fallbackIcon.path) as React.ReactNode;
  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  return {
    componentProps: { children: _path, viewBox: _viewBox, verticalAlign: 'middle', ...props },
    ...rest,
  };
}

export type UseIconReturn = ReturnType<typeof useIcon>;
