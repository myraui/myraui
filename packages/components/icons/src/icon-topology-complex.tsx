import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTopologyComplex = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7.5 7.5l3 3" />
      <path d="M6 8v8" />
      <path d="M18 16v-8" />
      <path d="M8 6h8" />
      <path d="M16 18h-8" />
    </>
  ),
  displayName: 'IconTopologyComplex',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
