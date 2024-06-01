import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandVite = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
      <path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
    </>
  ),
  displayName: 'IconBrandVite',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
