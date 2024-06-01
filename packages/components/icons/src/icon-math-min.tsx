import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathMin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 13s1 -9 4 -9c2.48 0 5.643 9.565 8.36 12.883" />
      <path d="M18.748 17.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
    </>
  ),
  displayName: 'IconMathMin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
