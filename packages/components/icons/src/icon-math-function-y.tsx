import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathFunctionY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
      <path d="M5 12h6" />
      <path d="M15 12l3 5.063" />
      <path d="M21 12l-4.8 9" />
    </>
  ),
  displayName: 'IconMathFunctionY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
