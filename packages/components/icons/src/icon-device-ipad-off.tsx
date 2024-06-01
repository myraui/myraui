import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16" />
      <path d="M9 19h6" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconDeviceIpadOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
