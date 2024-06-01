import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconError404 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7v4a1 1 0 0 0 1 1h3" />
      <path d="M7 7v10" />
      <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
      <path d="M17 7v4a1 1 0 0 0 1 1h3" />
      <path d="M21 7v10" />
    </>
  ),
  displayName: 'IconError404',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
