import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleArrowUpRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M15 9l-6 6" />
      <path d="M15 15v-6h-6" />
    </>
  ),
  displayName: 'IconCircleArrowUpRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
