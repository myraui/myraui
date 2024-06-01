import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMenuOrder = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M9 18l3 3l3 -3" />
      <path d="M9 6l3 -3l3 3" />
    </>
  ),
  displayName: 'IconMenuOrder',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
