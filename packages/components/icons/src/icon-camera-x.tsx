import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCameraX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.5 20h-8.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" />
      <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M22 22l-5 -5" />
      <path d="M17 22l5 -5" />
    </>
  ),
  displayName: 'IconCameraX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
