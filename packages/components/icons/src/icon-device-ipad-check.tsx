import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
      <path d="M9 18h2" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconDeviceIpadCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
