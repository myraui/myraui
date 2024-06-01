import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFreezeColumn = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 9.5l-6 6" />
      <path d="M9 4l-6 6" />
      <path d="M9 15l-5 5" />
      <path d="M9 3v18" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    </>
  ),
  displayName: 'IconFreezeColumn',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
