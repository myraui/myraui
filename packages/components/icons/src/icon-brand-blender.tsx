import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandBlender = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
      <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M3 16l9 -6.5" />
      <path d="M6 9h9" />
      <path d="M13 5l5.65 5" />
    </>
  ),
  displayName: 'IconBrandBlender',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
