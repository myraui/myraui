import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobileVibration = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
      <path d="M8 4l2 0" />
      <path d="M9 17l0 .01" />
      <path d="M21 6l-2 3l2 3l-2 3l2 3" />
    </>
  ),
  displayName: 'IconDeviceMobileVibration',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
