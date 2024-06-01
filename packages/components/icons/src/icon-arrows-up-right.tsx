import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsUpRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 21l4 -4l-4 -4" />
      <path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" />
      <path d="M11 7l-4 -4l-4 4" />
    </>
  ),
  displayName: 'IconArrowsUpRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
