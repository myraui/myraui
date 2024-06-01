import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBorderCorners = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1 -2 2h-2" />
      <path d="M8 20h-2a2 2 0 0 1 -2 -2v-2" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    </>
  ),
  displayName: 'IconBorderCorners',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
