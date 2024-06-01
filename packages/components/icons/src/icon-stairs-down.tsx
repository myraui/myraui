import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStairsDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 21h-5v-5h-5v-5h-5v-5h-5" />
      <path d="M18 3v7" />
      <path d="M15 7l3 3l3 -3" />
    </>
  ),
  displayName: 'IconStairsDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
