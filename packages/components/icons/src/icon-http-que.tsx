import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHttpQue = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
      <path d="M6 15l1 1" />
      <path d="M21 8h-4v8h4" />
      <path d="M17 12h2.5" />
      <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
    </>
  ),
  displayName: 'IconHttpQue',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
