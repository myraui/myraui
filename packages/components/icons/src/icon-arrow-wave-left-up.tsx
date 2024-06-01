import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowWaveLeftUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10h-4v4" />
      <path d="M21 12c-.887 -1.285 -2.48 -2.033 -4 -2c-1.52 -.033 -3.113 .715 -4 2c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3 -1 -4 -2l-2 -2" />
    </>
  ),
  displayName: 'IconArrowWaveLeftUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
