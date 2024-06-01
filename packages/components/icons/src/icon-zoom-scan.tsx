import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZoomScan = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16 16l-2.5 -2.5" />
    </>
  ),
  displayName: 'IconZoomScan',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
