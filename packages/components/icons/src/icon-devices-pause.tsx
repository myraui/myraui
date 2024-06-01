import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDevicesPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
      <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
      <path d="M16 9h2" />
    </>
  ),
  displayName: 'IconDevicesPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
