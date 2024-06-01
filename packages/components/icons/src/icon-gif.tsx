import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGif = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
      <path d="M12 8v8" />
      <path d="M16 12h3" />
      <path d="M20 8h-4v8" />
    </>
  ),
  displayName: 'IconGif',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
