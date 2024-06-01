import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRainbow = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
      <path d="M18 17a6 6 0 1 0 -12 0" />
      <path d="M14 17a2 2 0 1 0 -4 0" />
    </>
  ),
  displayName: 'IconRainbow',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
