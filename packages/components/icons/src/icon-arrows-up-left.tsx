import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsUpLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 7l-4 -4l-4 4" />
      <path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
      <path d="M7 13l-4 4l4 4" />
    </>
  ),
  displayName: 'IconArrowsUpLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
