import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerDownRightDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5v6a3 3 0 0 0 3 3h7" />
      <path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" />
    </>
  ),
  displayName: 'IconCornerDownRightDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
