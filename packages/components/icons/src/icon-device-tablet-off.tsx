import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceTabletOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-15" />
      <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconDeviceTabletOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
