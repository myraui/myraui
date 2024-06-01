import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceUsb = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8h8v9a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-9z" />
      <path d="M10 8v-4h4v4" />
    </>
  ),
  displayName: 'IconDeviceUsb',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
