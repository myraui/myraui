import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceWatchPlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M9 18v3h3.5" />
      <path d="M9 6v-3h6v3" />
    </>
  ),
  displayName: 'IconDeviceWatchPlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
