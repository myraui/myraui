import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadHorizontalOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h12a2 2 0 0 1 2 2v12m-2 2h-16a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
      <path d="M9 17h6" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconDeviceIpadHorizontalOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
