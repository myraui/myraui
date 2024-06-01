import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadHorizontal = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-12z" />
      <path d="M9 17h6" />
    </>
  ),
  displayName: 'IconDeviceIpadHorizontal',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
