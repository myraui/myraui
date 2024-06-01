import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRowRemove = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
      <path d="M10 16l4 4" />
      <path d="M10 20l4 -4" />
    </>
  ),
  displayName: 'IconRowRemove',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
