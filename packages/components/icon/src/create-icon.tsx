import React, { Children, useMemo } from 'react';
import Icon, { IconProps } from './icon';
import { forwardRef } from '@myraui/system';

export interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;

  /**
   * The `svg` path or group element
   */
  path?: React.ReactElement | React.ReactElement[];

  /**
   * Single `path` for the svg
   */
  d?: string;

  /**
   * The display name, useful for debugging
   */
  displayName?: string;

  /**
   * Default props to be passed to the icon component
   */
  defaultProps?: IconProps;
}

export function createIcon(options: CreateIconOptions) {
  const { viewBox = '0 0 24 24', d, displayName, defaultProps } = options;

  const path = Children.toArray(options.path);

  const Component = forwardRef<'svg', IconProps>((props, ref) => {
    return (
      <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
        {path?.length ? path : <path d={d} />}
      </Icon>
    );
  });

  Component.displayName = displayName;

  return Component;
}

type DefaultIconVariants = 'outline' | 'solid';

/**
 * Create an icon with multiple variants
 */
export function createVariantIcon<T extends Record<string, CreateIconOptions> = Record<DefaultIconVariants, CreateIconOptions>>(
  options: T,
  defaultVariant: keyof T
) {
  return ({ variant = defaultVariant, ...props }: IconProps & { variant?: keyof T }) => {
    const Icon = useMemo(() => {
      return createIcon(options[variant]);
    }, [variant]);

    return <Icon {...props} />;
  };
}
