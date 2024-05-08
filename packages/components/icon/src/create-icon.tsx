import React, { Children, forwardRef } from 'react';
import Icon, { IconProps } from './icon';

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

  const Component = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
        {path?.length ? path : <path fill="currentColor" d={d} />}
      </Icon>
    );
  });

  Component.displayName = displayName;

  return Component;
}
