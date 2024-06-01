import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDatabaseSmile = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 14h.01" />
      <path d="M14 14h.01" />
      <path d="M10 17a3.5 3.5 0 0 0 4 0" />
      <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
      <path d="M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12" />
    </>
  ),
  displayName: 'IconDatabaseSmile',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
