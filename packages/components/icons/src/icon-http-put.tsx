import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHttpPut = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
      <path d="M17 8h4" />
      <path d="M19 8v8" />
      <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
    </>
  ),
  displayName: 'IconHttpPut',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
