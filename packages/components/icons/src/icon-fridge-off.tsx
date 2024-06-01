import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFridgeOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
      <path d="M5 10h5m4 0h5" />
      <path d="M9 13v3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconFridgeOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
