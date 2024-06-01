import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerRightDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" />
    </>
  ),
  displayName: 'IconCornerRightDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
