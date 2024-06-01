import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandInertia = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" />
      <path d="M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" />
    </>
  ),
  displayName: 'IconBrandInertia',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
