import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFreezeRowColumn = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
      <path d="M15 3l-12 12" />
      <path d="M9.5 3l-6 6" />
      <path d="M20 3.5l-5.5 5.5" />
      <path d="M9 15l-5 5" />
      <path d="M21 9h-12v12" />
    </>
  ),
  displayName: 'IconFreezeRowColumn',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
