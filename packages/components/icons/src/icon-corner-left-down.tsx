import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerLeftDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4" />
    </>
  ),
  displayName: 'IconCornerLeftDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
