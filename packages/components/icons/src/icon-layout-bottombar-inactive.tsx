import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLayoutBottombarInactive = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
      <path d="M4 15h1" />
      <path d="M19 15h1" />
      <path d="M9 15h1" />
      <path d="M14 15h1" />
    </>
  ),
  displayName: 'IconLayoutBottombarInactive',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
