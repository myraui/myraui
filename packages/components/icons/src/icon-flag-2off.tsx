import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFlag2Off = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 14h9m4 0h1v-9h-10m-4 0v16" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconFlag2Off',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
