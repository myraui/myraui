import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLoader3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
      <path d="M17 12a5 5 0 1 0 -5 5" />
    </>
  ),
  displayName: 'IconLoader3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
