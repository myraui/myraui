import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconScan = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
      <path d="M4 17v1a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v1" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
      <path d="M5 12l14 0" />
    </>
  ),
  displayName: 'IconScan',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
