import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlignBoxTopRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M11 9v-2" />
      <path d="M14 13v-6" />
      <path d="M17 11v-4" />
    </>
  ),
  displayName: 'IconAlignBoxTopRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
