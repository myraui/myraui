import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMultiplier15x = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 16v-8l-2 2" />
      <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
      <path d="M7 16v.01" />
      <path d="M17 16l4 -4" />
      <path d="M21 16l-4 -4" />
    </>
  ),
  displayName: 'IconMultiplier15x',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
