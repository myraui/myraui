import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerRightUpDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 19h6a3 3 0 0 0 3 -3v-7" />
      <path d="M10 13l4 -4l4 4m-8 -5l4 -4l4 4" />
    </>
  ),
  displayName: 'IconCornerRightUpDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
