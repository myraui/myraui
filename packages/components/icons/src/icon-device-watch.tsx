import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceWatch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-6z" />
      <path d="M9 18v3h6v-3" />
      <path d="M9 6v-3h6v3" />
    </>
  ),
  displayName: 'IconDeviceWatch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
