import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDiagonalMinimize = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 10h4v-4" />
      <path d="M4 4l6 6" />
      <path d="M18 14h-4v4" />
      <path d="M14 14l6 6" />
    </>
  ),
  displayName: 'IconArrowsDiagonalMinimize',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
