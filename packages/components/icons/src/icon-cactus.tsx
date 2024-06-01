import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCactus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9v1a3 3 0 0 0 3 3h1" />
      <path d="M18 8v5a3 3 0 0 1 -3 3h-1" />
      <path d="M10 21v-16a2 2 0 1 1 4 0v16" />
      <path d="M7 21h10" />
    </>
  ),
  displayName: 'IconCactus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
