import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandBulma = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 16l1 -9l5 -5l6.5 6l-3.5 4l5 5l-8 5z" />
    </>
  ),
  displayName: 'IconBrandBulma',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
