import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDiagonalMinimize2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 10h-4v-4" />
      <path d="M20 4l-6 6" />
      <path d="M6 14h4v4" />
      <path d="M10 14l-6 6" />
    </>
  ),
  displayName: 'IconArrowsDiagonalMinimize2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
