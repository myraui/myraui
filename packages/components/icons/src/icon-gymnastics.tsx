import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGymnastics = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M13 21l1 -9l7 -6" />
      <path d="M3 11h6l5 1" />
      <path d="M11.5 8.5l4.5 -3.5" />
    </>
  ),
  displayName: 'IconGymnastics',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
