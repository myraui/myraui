import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceTabletPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
      <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </>
  ),
  displayName: 'IconDeviceTabletPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
