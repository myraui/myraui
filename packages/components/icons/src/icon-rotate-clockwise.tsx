import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRotateClockwise = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
    </>
  ),
  displayName: 'IconRotateClockwise',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
