import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconExposureMinus1 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h6" />
      <path d="M18 19v-14l-4 4" />
    </>
  ),
  displayName: 'IconExposureMinus1',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
