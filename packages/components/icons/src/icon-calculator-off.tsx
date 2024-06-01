import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCalculatorOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11" />
      <path d="M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1" />
      <path d="M8 14v.01" />
      <path d="M12 14v.01" />
      <path d="M8 17v.01" />
      <path d="M12 17v.01" />
      <path d="M16 17v.01" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconCalculatorOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
