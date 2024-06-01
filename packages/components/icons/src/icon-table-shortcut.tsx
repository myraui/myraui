import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTableShortcut = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 13v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8" />
      <path d="M3 10h18" />
      <path d="M10 3v11" />
      <path d="M2 22l5 -5" />
      <path d="M7 21.5v-4.5h-4.5" />
    </>
  ),
  displayName: 'IconTableShortcut',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
