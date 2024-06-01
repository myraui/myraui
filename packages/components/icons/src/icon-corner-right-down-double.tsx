import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerRightDownDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h6a3 3 0 0 1 3 3v7" />
      <path d="M10 10l4 4l4 -4m-8 5l4 4l4 -4" />
    </>
  ),
  displayName: 'IconCornerRightDownDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
