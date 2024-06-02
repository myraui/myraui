import React, { Children } from 'react';
import Icon, { IconProps } from './icon';
import { forwardRef } from '@myraui/system';
import { capitalize } from '@myraui/shared-utils';

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

type VariantIcon<T extends string> = React.ComponentType<IconProps & { variant?: T }> & Record<Capitalize<T>, React.ComponentType<IconProps>>;

/**
 * Create an icon with multiple variants
 */
export function createVariantIcon<K extends string = DefaultIconVariants, D extends K = K>(
  options: Record<K, CreateIconOptions>,
  defaultVariant: D
): VariantIcon<K> {
  const Components = Object.keys(options).reduce((acc, variant) => {
    acc[variant as K] = createIcon((options as any)[variant]);
    return acc;
  }, {} as Record<K, React.ComponentType<IconProps>>);

  const Comp: any = React.memo(({ variant = defaultVariant, ...props }: IconProps & { variant?: K }) => {
    const Component = Components[variant] as any;
    return <Component {...props} />;
  });

  for (const variant in Components) {
    Comp[capitalize(variant)] = Components[variant];
  }

  return Comp;
}
