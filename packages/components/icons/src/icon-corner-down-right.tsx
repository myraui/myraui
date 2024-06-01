import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerDownRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
    </>
  ),
  displayName: 'IconCornerDownRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
