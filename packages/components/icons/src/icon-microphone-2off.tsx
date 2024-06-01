import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMicrophone2Off = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.908 12.917a5 5 0 1 0 -5.827 -5.819" />
      <path d="M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconMicrophone2Off',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
