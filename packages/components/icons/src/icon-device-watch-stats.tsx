import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceWatchStats = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
      <path d="M9 18v3h6v-3" />
      <path d="M9 6v-3h6v3" />
      <path d="M9 14v-4" />
      <path d="M12 14v-1" />
      <path d="M15 14v-3" />
    </>
  ),
  displayName: 'IconDeviceWatchStats',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
