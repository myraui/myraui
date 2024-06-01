import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquarePercentage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
      <path d="M9 15.037l6 -6" />
      <path d="M9 9.068v.014" />
      <path d="M15 15.082v.016" />
    </>
  ),
  displayName: 'IconSquarePercentage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
