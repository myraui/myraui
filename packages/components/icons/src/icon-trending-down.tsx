import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTrendingDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7l6 6l4 -4l8 8" />
      <path d="M21 10l0 7l-7 0" />
    </>
  ),
  displayName: 'IconTrendingDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
